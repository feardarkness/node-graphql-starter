const app = require('./app');
const db = require('./db');

console.log('-> Cargando configuraciones'); // eslint-disable-line

module.exports = {
  appConfig: app,
  dbConfig: db,
};
/* puede usarse despues, es una carga automática de los archivos
const fs = require('fs');
const path = require('path');

const nombresArchivos = fs.readdirSync(__dirname);
const configuraciones = {};

nombresArchivos.forEach((nombre) => {
  if (nombre !== 'index.js') {
    const [nombreArchivo] = nombre.split('.');
    configuraciones[nombreArchivo] = require(path.join(__dirname, nombre)); // eslint-disable-line
  }
});

console.log('- Cargando configuraciones'); // eslint-disable-line

module.exports = configuraciones;
*/
