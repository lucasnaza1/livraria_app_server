const { Router } = require('express')
const { getLivros, getLivro } = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)


router.post('/', (req, res) => {
    res.send('Os livros foram postados')
})

router.patch('/', (req, res) => {
    res.send('Os livros foram atualizados')
})

router.delete('/', (req, res) => {
    res.send('Os livros foram deletados')
})

module.exports = router 