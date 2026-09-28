const { generateCase, getPublicCase, investigate, interrogate, stay, talk, accuse } = require('../services/caseService')

exports.generateCase = (req, res) => {
    try {
        const { playerName } = req.body || {}
        generateCase(undefined, playerName)
        const caseData = getPublicCase()
        return res.status(201).json({
            message: `Novo caso gerado com ${caseData.npcs.length} NPCs`,
            case: caseData
        })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.getCase = (req, res) => {
    const caseData = getPublicCase()
    if (!caseData) {
        return res.status(404).json({ error: 'Nenhum caso ativo ainda. Gere um caso primeiro.' })
    }
    return res.json(caseData)
}

exports.investigate = (req, res) => {
    try {
        const { location } = req.body || {}
        const result = investigate(location)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.interrogate = (req, res) => {
    try {
        const { location } = req.body || {}
        const result = interrogate(location)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.stay = (req, res) => {
    try {
        const { location } = req.body || {}
        const result = stay(location)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.talk = (req, res) => {
    try {
        const { location } = req.body || {}
        const result = talk(location)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.accuse = (req, res) => {
    try {
        const { npcId } = req.body || {}
        const result = accuse(npcId)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
