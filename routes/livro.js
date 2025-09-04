const { Router } = require('express')
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controllers/livro')

const router = Router()
// GET --> todos os livros
router.get('/', getLivros)
// GET --> um livro específicado pelo id
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router 