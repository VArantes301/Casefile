const crypto = require('node:crypto')
const {save, get } = require("../models/case")
const { generateNPC } = require("./npcService")
const { shuffle, random, weightedRandom } = require("./generate")
const { hollowCreek: hollowCreekCity } = require('../cities/hollowCreek');
const { occupations } = require('../utils/occupation/occupation');
const {
    whatHappenedLines,
    shakenLines,
    dontKnowLocationLines,
    noWitnessLines,
    noSuspicionLines
} = require('../utils/dialogue/interrogationLine');
const { casualDialogue } = require('../utils/dialogue/casualDialogue')
const { moods } = require('../utils/dialogue/moods')



const MAX_DEATHS = 10

const DISPOSITION_MOOD_WEIGHTS = {
    normal:      { friendly: 0.6,  hostile: 0.2,  closed: 0.2 },
    evasive:     { friendly: 0.15, hostile: 0.15, closed: 0.7 },
    rude:        { friendly: 0.1,  hostile: 0.75, closed: 0.15 },
    refuses:     { friendly: 0.05, hostile: 0.15, closed: 0.8 },
    aboutVictim: { friendly: 0.3,  hostile: 0.3,  closed: 0.4 }
}

function getCityForCase(caseData) {
    return hollowCreekCity
}

function advanceDay(caseData) {
    caseData.day++
    rollAllDispositions(caseData.npcs)
    save(caseData)
}

function buildFallbackIntro(victim) {
    if (!victim || !victim.name) {
        return 'A body was found in town two nights ago. The circumstances are still unclear, ' +
            'and the whole town is on edge. Your first day begins now.'
    }
    return `${victim.name} ${victim.lastname || ''}`.trim() +
        ' was found dead two nights ago. The circumstances are still unclear, ' +
        'and the whole town is on edge. Your first day begins now.'
}


function generateCase(city = hollowCreekCity, playerName) {
    const locationNames = Object.keys(city.locations)
    const shuffledLocations = shuffle(locationNames)

    const shuffledOccupations = shuffle(occupations).slice(0, shuffledLocations.length)

    const npcs = shuffledLocations.map((location, i) => generateNPC(location, shuffledOccupations[i]))

    const murdererIndex = Math.floor(Math.random() * npcs.length)
    npcs[murdererIndex].isMurderer = true

    rollAllDispositions(npcs)

    const excluded = city.excludedFromCrimeScene || []
    const possibleCrimeScenes = locationNames.filter(loc => !excluded.includes(loc))

    const caseData = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        cityId: city.id,
        day: 1,
        status: 'active',
        ending: null,
        deathsCount: 0,
        maxDeaths: MAX_DEATHS,
        description: city.caseIntro || buildFallbackIntro(city.victim),
        victim: city.victim,
        protagonist: {
            name: (playerName && playerName.trim()) || 'Detective',
            personality: city.protagonist.personality
        },
        murdererId: npcs[murdererIndex].id,
        murderLocation: random(possibleCrimeScenes),
        npcs,
        log: []
    }

    save(caseData)
    return caseData
}



function getPublicCase() {
    const caseData = get()
    if (!caseData) return null

    return {
        id: caseData.id,
        createdAt: caseData.createdAt,
        day: caseData.day,
        status: caseData.status,
        ending: caseData.ending || null,
        deathsCount: caseData.deathsCount,
        maxDeaths: caseData.maxDeaths,
        description: caseData.description,
        victim: caseData.victim,
        protagonist: caseData.protagonist,
        npcs: caseData.npcs.map(({ isMurderer, dailyMood, dailyTopics, ...publicNpc }) => publicNpc),
        log: caseData.log
    }
}

function requireCase() {
    const caseData = get()
    if (!caseData) throw new Error('Nenhum caso ativo. Gere um caso primeiro.')
    return caseData
}

function assertCaseActive(caseData) {
    if (caseData.status === 'over') {
        throw new Error('O limite de mortes foi atingido. Não há mais tempo para investigar — acuse alguém agora.')
    }
    if (caseData.status !== 'active') {
        throw new Error('Este caso já foi encerrado.')
    }
}

function requireValidLocation(city, locationName) {
    if (!city.locations[locationName]) {
        throw new Error('Localização inválida.')
    }
}

function findSuspectAt(caseData, locationName) {
    const suspect = caseData.npcs.find(npc => npc.location === locationName)
    if (!suspect) throw new Error('Não há suspeito nessa localização.')
    if (!suspect.alive) throw new Error(`${suspect.name} ${suspect.lastname} não está mais por aqui.`)
    return suspect
}

function rollDailyDisposition(npc) {
    const weights = DISPOSITION_MOOD_WEIGHTS[npc.disposition] || { friendly: 1, hostile: 1, closed: 1 }
    const dailyMood = weightedRandom(weights)

    npc.dailyMood = dailyMood
    npc.dailyTopics = shuffle(moods[dailyMood]).slice(0, 5)
}

function rollAllDispositions(npcs) {
    npcs.forEach(rollDailyDisposition)
}

function investigate(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)

    const locationData = city.locations[locationName]
    const isCrimeScene = locationName === caseData.murderLocation

    let foundObject

    if (isCrimeScene) {
        const murderer = caseData.npcs.find(npc => npc.id === caseData.murdererId)
        const matching = (locationData.crimeSceneObjects || [])
            .filter(obj => obj.occupation === murderer.occupation)

        const pool = matching.length > 0 ? matching : locationData.crimeSceneObjects
        foundObject = pool && pool.length > 0 ? random(pool) : null
    } else {
        foundObject = locationData.genericObjects && locationData.genericObjects.length > 0
            ? random(locationData.genericObjects)
            : null
    }

    const result = {
        day: caseData.day,
        location: locationName,
        description: locationData.description,
        foundObject: foundObject || { item: 'Nothing catches your eye here yet.' }
    }

    caseData.log.push({ day: caseData.day, type: 'investigate', location: locationName, foundObject: result.foundObject })
    advanceDay(caseData)

    return result
}

function guessMurderLocation(caseData, city, suspect) {
    const roll = Math.random()
    const wrongLocations = Object.keys(city.locations).filter(loc => loc !== caseData.murderLocation)

    if (suspect.isMurderer) {
        return roll < 0.5 ? random(dontKnowLocationLines) : random(wrongLocations)
    }

    if (roll < 0.25) return caseData.murderLocation
    if (roll < 0.55) return random(dontKnowLocationLines)
    return random(wrongLocations)
}

function guessWitness(caseData, suspect) {
    const others = caseData.npcs.filter(npc => npc.id !== suspect.id && npc.alive)
    if (Math.random() < 0.35 || others.length === 0) return random(noWitnessLines)

    const person = random(others)
    return `${person.name} ${person.lastname}`
}

function guessSuspicion(caseData, suspect) {
    const others = caseData.npcs.filter(npc => npc.id !== suspect.id && npc.alive)
    if (Math.random() < 0.4 || others.length === 0) return random(noSuspicionLines)

    const person = random(others)
    return `${person.name} ${person.lastname}`
}

function interrogate(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)
    const suspect = findSuspectAt(caseData, locationName)

    const shaken = Math.random() < 0.2

    const answers = shaken
        ? {
            whatHappened: random(shakenLines),
            murderLocationGuess: null,
            witnessSeen: null,
            suspicion: null
        }
        : {
            whatHappened: random(whatHappenedLines),
            murderLocationGuess: guessMurderLocation(caseData, city, suspect),
            witnessSeen: guessWitness(caseData, suspect),
            suspicion: guessSuspicion(caseData, suspect)
        }

    const result = {
        day: caseData.day,
        location: locationName,
        suspect: {
            id: suspect.id,
            name: suspect.name,
            lastname: suspect.lastname,
            occupation: suspect.occupation,
            trait: suspect.trait
        },
        answers
    }

    caseData.log.push({ day: caseData.day, type: 'interrogate', location: locationName, suspectId: suspect.id, answers })
    advanceDay(caseData)

    return result
}

function stay(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)

    const suspect = findSuspectAt(caseData, locationName)

    let deceased = null

    if (!suspect.isMurderer) {

        const candidates = caseData.npcs.filter(npc =>
            npc.id !== suspect.id && npc.id !== caseData.murdererId && npc.alive
        )
        if (candidates.length > 0) {
            deceased = random(candidates)
            deceased.alive = false
            caseData.deathsCount++
        }
    }

    const result = {
        day: caseData.day,
        location: locationName,
        staySafe: !deceased,
        deceased: deceased
            ? { id: deceased.id, name: deceased.name, lastname: deceased.lastname, location: deceased.location }
            : null
    }

    caseData.log.push({
        day: caseData.day,
        type: 'stay',
        location: locationName,
        staySafe: result.staySafe,
        deceasedId: deceased ? deceased.id : null
    })

    if (caseData.deathsCount >= caseData.maxDeaths) {
        caseData.status = 'over'
    }

    advanceDay(caseData)

    return result
}

function talk(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)
    const suspect = findSuspectAt(caseData, locationName)

    const topic = random(suspect.dailyTopics)
    const line = random(casualDialogue[topic])

    const result = {
        day: caseData.day,
        location: locationName,
        suspect: { id: suspect.id, name: suspect.name, lastname: suspect.lastname },
        line
    }

    caseData.log.push({ day: caseData.day, type: 'talk', location: locationName, suspectId: suspect.id, topic, line })
    save(caseData)

    return result
}

function accuse(npcId) {
    const caseData = requireCase()

    if (caseData.status === 'solved' || caseData.status === 'lost') {
        throw new Error('Este caso já foi encerrado.')
    }

    const city = getCityForCase(caseData)
    const correct = caseData.murdererId === npcId

    if (correct) {
        caseData.status = 'solved'
        caseData.ending = city.victoryEnding
    } else if (caseData.status === 'over') {
        caseData.status = 'lost'
        caseData.ending = city.defeatEnding
    }

    save(caseData)

    return { correct, status: caseData.status, ending: caseData.ending || null }
}


module.exports = {
    generateCase,
    getPublicCase,
    investigate,
    interrogate,
    stay,
    talk,
    accuse
}