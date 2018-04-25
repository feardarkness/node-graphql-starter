const moment = require('moment');
const mongoose = require('mongoose');

const estados = ['ACTIVO', 'INACTIVO'];

const esquema = {
  titulo: {
    type: 'String',
    required: true,
  },
  resumen: {
    type: 'String',
    required: true,
  },
  contenido: {
    type: 'String',
    required: true,
  },
  fechaPublicacion: {
    type: Date,
    required: true,
    default: moment().format(),
  },
  fechaActualizacion: {
    type: Date,
  },
  estado: {
    type: 'String',
    required: true,
    uppercase: true,
    enum: estados,
  },
};

module.exports = {
  esquema,
  Noticia: mongoose.model('Noticia', new mongoose.Schema(esquema)),
};
