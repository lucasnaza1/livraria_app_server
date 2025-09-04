const { Router } = require('express')
const { getLivros, getLivro, postLivro } = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)


router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Os livros foram atualizados')
})

router.delete('/', (req, res) => {
    res.send('Os livros foram deletados')
})

module.exports = router 