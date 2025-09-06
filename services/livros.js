const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivrosId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoModificado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoModificado

    fs.writeFileSync('livro.json', JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livroFiltrado))
}

module.exports = {
    getLivrosId,
    getTodosLivros,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}