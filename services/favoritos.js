const fs = require('fs')

function getTodosfavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados))

}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))

}

module.exports = {
    getTodosfavoritos,
    deletaFavoritoId,
    insereFavorito
}