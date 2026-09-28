const crypto = require('node:crypto')
const { male, female, surname } = require('../utils/names/names');
const { occupations } = require('../utils/occupation/occupation');
const { traits } = require('../utils/traits/traits');
const { gender, generateStats, odds, random } = require('./generate')
const dispositions = ['normal', 'evasive', 'rude', 'aboutVictim', 'refuses']

function generateNPC(location, occupation) {
    const npcGender = gender()
    const nameList = npcGender === 'female' ? female : male

    return {
        id: crypto.randomUUID(),
        name: random(nameList),
        lastname: random(surname),
        occupation: occupation || random(occupations),
        trait: random(traits),
        age: odds(18, 40),
        gender: npcGender,
        attributes: generateStats(10, 0),
        location,
        disposition: random(dispositions),
        alive: true,
        isMurderer: false
    }
}

module.exports = {
    generateNPC
}