/* eslint-disable-next-line */
const obtenerProblema = (id) => ({
  id: 1111,
  titulo: 'asdsadsad',
  detalle: 'ADSasdsad das dsa dsa dasd sa dsa d sadsa dsa ',
  fecha: '05/09/1975',
  estado: 'ACTIVO',
});

const obtenerProblemas = () => ([
  {
    id: 1111,
    titulo: 'asdsadsad',
    detalle: 'ADSasdsad das dsa dsa dasd sa dsa d sadsa dsa ',
    fecha: '05/09/1975',
    estado: 'ACTIVO',
  },
]);

/* eslint-disable-next-line */
const obtenerSeguimiento = (id) => ({
  descripcion: 'ADSasdsad das dsa dsa dasd sa dsa d sadsa dsa ',
  fecha: '05/08/1789',
});

module.exports = {
  obtenerProblema,
  obtenerProblemas,
  obtenerSeguimiento,
};
