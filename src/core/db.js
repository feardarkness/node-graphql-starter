const mongoose = require('mongoose');
const { dbConfig } = require('../configs');

if (dbConfig.debug) {
  mongoose.set('debug', true);
}

let connectionUrl;
if (dbConfig.auth && dbConfig.auth.user && dbConfig.auth.user !== '') {
  connectionUrl = `mongodb://${dbConfig.user}:${dbConfig.pass}@${dbConfig.ip}:${dbConfig.puerto}/${dbConfig.nombre}`;
} else {
  connectionUrl = `mongodb://${dbConfig.ip}:${dbConfig.puerto}/${dbConfig.nombre}`;
}

mongoose.connection.on('connected', () => {
  console.log('-> Conectado a la Base de Datos'); // eslint-disable-line
});

mongoose.connection.on('disconnected', () => {
  console.log('-> Desconectado de la Base de Datos'); // eslint-disable-line
});

mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('-> Desconectado de la Base de Datos'); // eslint-disable-line
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('-> Desconectando de la base de datos'); // eslint-disable-line
    process.exit(0);
  });
});

module.exports = () => mongoose.connect(connectionUrl, {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  poolSize: 100,
});
