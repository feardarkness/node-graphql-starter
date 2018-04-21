const express = require('express');

const app = express();

console.log('-> Cargando middlewares globales antes de las rutas'); // eslint-disable-line


console.log('-> Cargando rutas'); // eslint-disable-line
app.use('*', (req, res) => {
  res.json({
    estado: 'ok',
  });
});

console.log('-> Cargando middlewares globales despues de las rutas'); // eslint-disable-line
// WIP middlewares despues de rutas globales

module.exports = app;
