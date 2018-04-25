const moment = require('moment');
const mongoose = require('mongoose');

const estados = ['ACTIVO', 'INACTIVO'];

const esquema = {
  titulo: {
    type: 'String',
    required: true,
  },
  detalle: {
    type: 'String',
    required: true,
  },
  seguimiento: [{
    descripcion: {
      type: 'String',
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
  }],
  fecha: {
    type: Date,
    required: true,
    default: moment().format(),
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
  Problema: mongoose.model('Problema', new mongoose.Schema(esquema)),
};
