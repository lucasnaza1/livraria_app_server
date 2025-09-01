const { Router } = require('express')

const router = Router()

router.get('/', (req, res) =>{
    
    try{
        res.send('Aqui serão exibidos os livros')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

router.post('/', (req,res) => {
    res.send('Os livros foram postados')
})

router.patch('/', (req,res) => {
    res.send('Os livros foram atualizados')
})

router.delete('/', (req,res) => {
    res.send('Os livros foram deletados')
})

module.exports = router 