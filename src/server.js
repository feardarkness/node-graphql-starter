const express = require('express');
const logger = require('./core/logger');

const app = express();

logger.info('-> Cargando middlewares globales antes de las rutas'); // eslint-disable-line

logger.info('-> Cargando rutas'); // eslint-disable-line

app.use('/estado', (req, res) => {
  res.json({
    estado: 'ok',
  });
});

logger.info('-> Cargando middlewares globales despues de las rutas'); // eslint-disable-line
// WIP middlewares despues de rutas globales

module.exports = app;
