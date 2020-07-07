const contador = {
    _id: 1,
    get id() {return this._id++} 
}

const bancoDeDados = {}

const listarProdutos = () => {
    if (Object.keys(bancoDeDados).length > 0) {
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
    produto.id = contador.id
    bancoDeDados[produto.id] = produto
    return 'Produto salvo no banco de dados com sucesso!'
}

const changeProduto = (produto) => {
    bancoDeDados[produto.id] = produto
    return `O Produto ${produto.id} foi alterado com sucesso!`
}

const delProduto = id => {
    const produto = bancoDeDados[id]
    delete bancoDeDados[id]
    return `O produto ${produto.id} foi excluído com sucesso!`
}

module.exports = {
    listarProdutos,
    getProduto,
    saveProduto,
    changeProduto,
    delProduto
}