const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const db = require('./database')

app.use(bodyParser.urlencoded({extended: true}))


// Lista de Produtos
app.get('/', (req, res) => {
    res.send(db.listarProdutos())
})


// Salva um produto no banco de dados
app.post('/', (req, res) => {
    const resp = db.saveProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(resp)
})


// Altera um produto específico
app.put('/produto/:id', (req, res) => {
    const resp = db.changeProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(resp)
})


// Visualiza um produto específico
app.get('/produto/:id', (req, res) => {
    res.send(db.getProduto(req.params.id))
})


// Exclui um produto específico


app.listen(8081, () => console.log('Servidor ativo em http://localhost:8081'))