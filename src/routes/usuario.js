const router = require('express').Router()

const { Usuario } = require('../app/models')

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.status(200).json(usuarios)
})

router.post('/login', async (req, res) => {
    const { email, senha_hash } = req.body
    const usuario = await Usuario.findOne({
        where: {
            email
        }
    })
    if(usuario === null ) {
        res.status(400).json({erro: "Usuario não encontrado!"})
        return false
    }
    if (usuario.senha_hash !=  senha_hash ) {
        res.status(400).json({erro: "Senha errada!"})
        return false
    }

    res.status(200).json(usuario)
})


module.exports = router