const {customPlayer, randomPlayer, getAll } = require('../services/characterService')

exports.customPlayer = (req, res) => {
    try {
        const player = customPlayer(req.body || {});
        return res.status(201).json({ message: 'Player successfully created', player})
    } catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.randomPlayer = (req, res) => {
        const player = randomPlayer()
        return res.status(201).json({ message: "Player successfully created", player})
}

exports.getAll = (req, res) => {
    const players = getAll()
    return res.json(players)
}