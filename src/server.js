const express = require('express');
const logger = require('./core/middlewares/logger');

const app = express();

console.log('-> Cargando middlewares globales antes de las rutas'); // eslint-disable-line
app.use(logger);

console.log('-> Cargando rutas'); // eslint-disable-line
app.use('*', (req, res) => {
  res.json({
    estado: 'ok',
  });
});

console.log('-> Cargando middlewares globales despues de las rutas'); // eslint-disable-line
// WIP middlewares despues de rutas globales

module.exports = app;
