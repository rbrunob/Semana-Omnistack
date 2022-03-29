const express = require('express');
const mongoose = require('mongoose');

const routes = require('./route')

const app = express();

mongoose.connect('mongodb+srv://oministackdatabase:n53nDNE0aQGHgm3J@oministack.tlshg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PU, DELETE

//req.query = acessar query params (para filtro)
//req.params = acessar route params (para ediação, delete)
//req.body = acessar corpo da requisição (criação, edição)

app.use(express.json())
app.use(routes);

app.listen(3333);