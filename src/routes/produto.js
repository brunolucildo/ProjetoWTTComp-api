const router = require('express').Router()

const { Produto } = require('../app/models')

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll()
    res.status(200).json(produtos)
})

router.post('/', async (req, res) => {
    const produtoNovo = await Produto.create(req.body)
    .catch(erro=>{ 
        console.log(erro)
        res.status(400).json(erro)
        return false
    })

    res.status(201).json(produtoNovo)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const produto = await Produto.findOne({
        where : {
            id
        }
    })

    produto.update(
        req.body
    )

    res.status(200).json(produto)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const produtoRemovido = await Produto.destroy({
        where : {
           id
        }
    })

    res.status(200).json(produtoRemovido)
})

module.exports = router