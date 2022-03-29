const express = require('express');
const routes = require('./route')

const app = express();

//GET, POST, PU, DELETE

//req.query = acessar query params (para filtro)
//req.params = acessar route params (para ediação, delete)
//req.body = acessar corpo da requisição (criação, edição)

app.use(express.json())
app.use(routes);

app.listen(3333);