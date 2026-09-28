const { add, listAll } = require('../models/character');
const { gender, generateStats, odds, random } = require('./generate')
const { male, female, surname } = require('../utils/names/names')
const { occupations } = require('../utils/occupation/occupation')
const { traits } = require('../utils/traits/traits')
const crypto = require('node:crypto');


function customPlayer(data) {
    if (!data || typeof data.name !== 'string' || !data.name.trim()) {
        throw new Error('O campo "name" é obrigatório para criar um personagem.')
    }

    const newPlayer = {
        ...data,
        name: data.name.trim(),
        id: crypto.randomUUID()
    }

    return add(newPlayer)
}

function randomPlayer() {
    const Playergender = gender()
    const nameList = Playergender === 'female' ? female : male

    const newPlayer = {
        id: crypto.randomUUID(),
        name: random(nameList),
        lastname: random(surname),
        occupation: random(occupations),
        trait: random(traits),
        age: odds(18, 70),
        gender: Playergender,
        attributes: generateStats(10, 0)
    }
    return add(newPlayer)
}

function getAll() {
    return listAll();
}

module.exports = {
    customPlayer,
    randomPlayer,
    getAll,
    odds,
    random
}
