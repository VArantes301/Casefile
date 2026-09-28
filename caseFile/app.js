const path = require('node:path')
const express = require('express')
const caseRoutes = require('./src/routes/caseRoutes')
const characterRoutes = require('./src/routes/characterRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/case', caseRoutes)
app.use('/api/character', characterRoutes)

// Qualquer outra rota /api/* que não bateu em nada acima
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada.' })
})

// Handler de erro genérico (segurança extra, os controllers já tratam seus próprios erros)
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Erro interno do servidor.' })
})

app.listen(PORT, () => {
    console.log(`Hollow Creek rodando em http://localhost:${PORT}`)
})

module.exports = app
