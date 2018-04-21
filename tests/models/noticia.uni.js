const test = require('tape');
const { esquema, Noticia } = require('../../src/models/noticia');

test('Esquema Noticas', (t) => {
  const columnas = ['titulo', 'resumen', 'contenido', 'fechaPublicacion', 'estado'];
  t.deepEqual(columnas, Object.keys(esquema), `El modelo debe tener las columnas: ${columnas.join(', ')}`);
  t.equal(Noticia.modelName, 'Noticia', 'El nombre del modelo debe ser Noticia');
  t.end();
});
