function getLivros (req, res) {
    try{
        res.send('Aqui serão exibidos os livros')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}