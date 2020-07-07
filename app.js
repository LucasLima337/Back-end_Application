const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const db = require('./database')

app.get('/', (req, res) => {
    res.send(db.listarProdutos())
})

app.get('/produto/:id', (req, res) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/', (req, res) => {
    const produto = db.saveProduto({
        nome: req.params.nome,
        preco: req.params.preco
    })
})

app.listen(8081, () => console.log('Servidor ativo em http://localhost:8081'))