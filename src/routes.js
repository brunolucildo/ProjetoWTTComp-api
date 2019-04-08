const routes = require('express').Router();
const routeUsuario = require('./routes/usuario')
const routeProduto = require('./routes/produto')

routes.use('/usuario', routeUsuario)
routes.use('/produto', routeProduto)

module.exports = routes;