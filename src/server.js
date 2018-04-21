const express = require('express');
const logger = require('./core/logger');

const app = express();

logger.info('-> Cargando middlewares globales antes de las rutas');


logger.info('-> Cargando rutas');
app.use(require('./core/middlewares/request'));


app.use('/estado', (req, res) => {
  res.json({
    estado: 'ok',
  });
});


logger.info('-> Cargando middlewares globales despues de las rutas');
// WIP middlewares despues de rutas globales

module.exports = app;
