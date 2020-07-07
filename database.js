const contador = {
    _id: 1,
    get id() {return this._id++} 
}

const bancoDeDados = {}

const listarProdutos = () => {
    if (bancoDeDados.length) {
        return Object.values(bancoDeDados)
    }
    else {
        return 'Sua lista está vazia!'
    }
}

const getProduto = id => {
    if (bancoDeDados[id]) {
        return bancoDeDados[id]
    }
    else {
        return 'Nenhum item foi encontrado!'
    }
}

const saveProduto = produto => {
    if (!produto.id) {
        produto.id = contador.id
    }
    
}

module.exports = {
    listarProdutos,
    getProduto,
    saveProduto
}