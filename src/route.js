const express = require('express');
const SessionControler = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', SessionControler.store)
 
 module.exports = routes;