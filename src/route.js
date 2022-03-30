const express = require('express');
const multer = require('multer');
const upload = require('./config/upload');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const uploads = multer(uploadConfig);

routes.post('/sessions', SessionController.store)

routes.post('/spots', upload.single('thumbnail'), SpotController.store)

 module.exports = routes;