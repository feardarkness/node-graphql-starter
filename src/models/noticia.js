const moment = require('moment');
const mongoose = require('mongoose');

const estados = ['ACTIVO', 'INACTIVO'];

const esquema = {
  titulo: {
    type: 'String',
  },
  resumen: {
    type: 'String',
  },
  contenido: {
    type: 'String',
  },
  fechaPublicacion: {
    type: Date,
    default: moment().format(),
  },
  estado: {
    type: 'String',
    uppercase: true,
    enum: estados,
  },
};

module.exports = {
  esquema,
  Noticia: mongoose.model('Noticia', new mongoose.Schema(esquema)),
};
