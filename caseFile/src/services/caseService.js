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
const { personalStories, opensUpNotice } = require('../utils/dialogue/personalStories')



const MAX_DEATHS = 10

const KILL_CHANCE_PER_DAY = 0.2

const STAY_PROTECTION = 'always'

const OPEN_UP_AFTER_NIGHTS = 3

const WITNESS_CLAIMS = { knows: 4, unsure: 6, wrong: 2 }

const HIDDEN_NPC_FIELDS = [
    'isMurderer', 'isWitness', 'witnessClaim',
    'disposition', 'dailyMood', 'dailyTopics', 'toldStories'
]

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

function fillTemplate(template, npc) {
    const occupation = npc.occupation.toLowerCase()
    const article = /^[aeiou]/.test(occupation) ? 'an' : 'a'
    const years = Math.max(2, npc.age - 20)

    return template
        .replace(/\{name\}/g, npc.name)
        .replace(/\{aOccupation\}/g, `${article} ${occupation}`)
        .replace(/\{occupation\}/g, occupation)
        .replace(/\{age\}/g, String(npc.age))
        .replace(/\{years\}/g, String(years))
        .replace(/\{trait\}/g, npc.trait.toLowerCase())
}

function hasFired(caseData, eventId) {
    return caseData.events.some(e => e.id === eventId)
}

function markFired(caseData, ev) {
    caseData.events.push({
        id: ev.id,
        day: caseData.day,
        title: ev.title || null,
        text: ev.text,
        banner: ev.banner || null
    })
}

function toPublicEvent(ev) {
    return { id: ev.id, title: ev.title || null, text: ev.text }
}

function runActionEvents(city, caseData, action, location, result) {
    result.events = result.events || []

    const ev = (city.events || []).find(e =>
        e.text && e.trigger &&
        e.trigger.action === action &&
        e.trigger.location === location &&
        (e.trigger.day == null || e.trigger.day === caseData.day) &&
        !hasFired(caseData, e.id)
    )
    if (!ev) return

    markFired(caseData, ev)

    if (ev.replacesDescription && result.description !== undefined) {
        result.description = ev.text
    } else {
        result.events.push(toPublicEvent(ev))
    }
}

function collectDeathEvents(city, caseData) {
    const fired = []

    ;(city.events || []).forEach(ev => {
        if (!ev.text || !ev.trigger || ev.trigger.deaths == null) return
        if (caseData.deathsCount < ev.trigger.deaths) return
        if (hasFired(caseData, ev.id)) return

        markFired(caseData, ev)
        fired.push(toPublicEvent(ev))
    })

    return fired
}

function rollNightlyKill(caseData, stayedWith) {
    if (stayedWith) {
        if (STAY_PROTECTION === 'always') return null
        if (STAY_PROTECTION === 'murderer' && stayedWith.isMurderer) return null
    }

    if (Math.random() >= KILL_CHANCE_PER_DAY) return null

    const candidates = caseData.npcs.filter(npc =>
        npc.alive && !npc.isMurderer && !(stayedWith && npc.id === stayedWith.id)
    )
    if (candidates.length === 0) return null

    const victim = random(candidates)
    victim.alive = false
    caseData.deathsCount++

    caseData.log.push({ day: caseData.day, type: 'death', location: victim.location, victimId: victim.id })

    if (caseData.deathsCount >= caseData.maxDeaths) {
        caseData.status = 'over'
    }

    return { id: victim.id, name: victim.name, lastname: victim.lastname, location: victim.location }
}

function advanceDay(caseData, city, { stayedWith = null } = {}) {
    const overnight = rollNightlyKill(caseData, stayedWith)
    const events = collectDeathEvents(city, caseData)

    caseData.day++
    rollAllDispositions(caseData.npcs)
    save(caseData)

    return { overnight, events }
}

function finishDay(caseData, city, result, options) {
    const { overnight, events } = advanceDay(caseData, city, options)
    result.overnight = overnight
    result.events = [...(result.events || []), ...events]
    return result
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

function assignWitness(npcs) {
    const witness = random(npcs)
    witness.isWitness = true
    witness.witnessClaim = { type: 'unsure', targetId: null }

    const pool = shuffle([
        ...Array(WITNESS_CLAIMS.knows).fill('knows'),
        ...Array(Math.max(WITNESS_CLAIMS.unsure - 1, 0)).fill('unsure'),
        ...Array(WITNESS_CLAIMS.wrong).fill('wrong')
    ])

    npcs.filter(npc => npc !== witness).forEach((npc, i) => {
        let type = pool[i] || 'unsure'
        let targetId = null

        if (type === 'knows') {
            targetId = witness.id
        } else if (type === 'wrong') {
            const wrongTargets = npcs.filter(n => n !== witness && n !== npc)
            if (wrongTargets.length > 0) targetId = random(wrongTargets).id
            else type = 'unsure'
        }

        npc.witnessClaim = { type, targetId }
    })
}

function generateCase(city = hollowCreekCity, playerName) {
    const locationNames = Object.keys(city.locations)
    const shuffledLocations = shuffle(locationNames)

    const shuffledOccupations = shuffle(occupations).slice(0, shuffledLocations.length)

    const npcs = shuffledLocations.map((location, i) => generateNPC(location, shuffledOccupations[i]))

    const murdererIndex = Math.floor(Math.random() * npcs.length)
    npcs[murdererIndex].isMurderer = true

    assignWitness(npcs)
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
        events: [],
        log: []
    }

    save(caseData)
    return caseData
}

function toPublicNpc(npc) {
    const publicNpc = { ...npc }
    HIDDEN_NPC_FIELDS.forEach(field => delete publicNpc[field])
    return publicNpc
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
        npcs: caseData.npcs.map(toPublicNpc),
        events: caseData.events,
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
        foundObject: foundObject || { item: 'Nothing catches your eye here yet.' },
        events: []
    }

    runActionEvents(city, caseData, 'investigate', locationName, result)

    caseData.log.push({ day: caseData.day, type: 'investigate', location: locationName, foundObject: result.foundObject })

    return finishDay(caseData, city, result)
}

function guessMurderLocation(caseData, city, suspect) {
    const roll = Math.random()
    const wrongLocations = Object.keys(city.locations).filter(loc => loc !== caseData.murderLocation)

    if (suspect.isWitness) {
        return suspect.isMurderer ? random(wrongLocations) : caseData.murderLocation
    }

    if (suspect.isMurderer) {
        return roll < 0.5 ? random(dontKnowLocationLines) : random(wrongLocations)
    }

    if (roll < 0.25) return caseData.murderLocation
    if (roll < 0.55) return random(dontKnowLocationLines)
    return random(wrongLocations)
}

function witnessClaimLine(caseData, suspect) {
    const claim = suspect.witnessClaim
    if (!claim || claim.type === 'unsure' || !claim.targetId) return random(noWitnessLines)

    const target = caseData.npcs.find(npc => npc.id === claim.targetId)
    if (!target) return random(noWitnessLines)

    return `${target.name} ${target.lastname}`
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

    const shaken = !suspect.isWitness && Math.random() < 0.2

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
            witnessSeen: witnessClaimLine(caseData, suspect),
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
        answers,
        events: []
    }

    runActionEvents(city, caseData, 'interrogate', locationName, result)

    caseData.log.push({ day: caseData.day, type: 'interrogate', location: locationName, suspectId: suspect.id, answers })

    return finishDay(caseData, city, result)
}
function stay(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)

    const suspect = findSuspectAt(caseData, locationName)

    suspect.nightsSpent = (suspect.nightsSpent || 0) + 1

    const result = {
        day: caseData.day,
        location: locationName,
        suspect: { id: suspect.id, name: suspect.name, lastname: suspect.lastname },
        nightsSpent: suspect.nightsSpent,
        events: []
    }

    runActionEvents(city, caseData, 'stay', locationName, result)

    if (suspect.nightsSpent === OPEN_UP_AFTER_NIGHTS) {
        result.events.push({ id: 'opensUp', title: null, text: fillTemplate(opensUpNotice, suspect) })
    }

    caseData.log.push({ day: caseData.day, type: 'stay', location: locationName, suspectId: suspect.id })

    return finishDay(caseData, city, result, { stayedWith: suspect })
}
function talk(locationName) {
    const caseData = requireCase()
    assertCaseActive(caseData)
    const city = getCityForCase(caseData)
    requireValidLocation(city, locationName)
    const suspect = findSuspectAt(caseData, locationName)

    let topic
    let line
    let opened = false

    if ((suspect.nightsSpent || 0) >= OPEN_UP_AFTER_NIGHTS) {
        suspect.toldStories = suspect.toldStories || []
        const unused = personalStories
            .map((_, i) => i)
            .filter(i => !suspect.toldStories.includes(i))

        if (unused.length > 0) {
            const idx = random(unused)
            suspect.toldStories.push(idx)
            topic = 'personal'
            line = fillTemplate(personalStories[idx], suspect)
            opened = true
        }
    }

    if (!opened) {
        topic = random(suspect.dailyTopics)
        line = random(casualDialogue[topic])
    }

    const result = {
        day: caseData.day,
        location: locationName,
        suspect: { id: suspect.id, name: suspect.name, lastname: suspect.lastname },
        line,
        opened,
        events: []
    }

    runActionEvents(city, caseData, 'talk', locationName, result)

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
