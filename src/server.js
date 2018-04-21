const express = require('express');
const logger = require('./core/logger');
const { Noticia } = require('./models');

const app = express();

logger.info('-> Cargando middlewares globales antes de las rutas'); // eslint-disable-line

logger.info('-> Cargando rutas'); // eslint-disable-line

app.use('*', (req, res) => {
  Noticia.find({
    titulo: 'algo',
  }).exec()
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      console.log(err);
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      res.status(500).json({
        estado: 'ok',
      });
    });
});

logger.info('-> Cargando middlewares globales despues de las rutas'); // eslint-disable-line
// WIP middlewares despues de rutas globales

module.exports = app;
