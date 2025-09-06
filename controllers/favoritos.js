const { getTodosfavoritos, deletaFavoritoId, insereFavorito } = require("../services/favoritos")

function getFavoritos(req, res) {
    try {
        const livros = getTodosfavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.send(201).send('Favoritos cadastrado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritoId(id)
            res.send('Favorito foi deletado com sucesso')
            res.send(200)
        } else {
            res.status(422)
            res.send('ID inválido')
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavorito
}