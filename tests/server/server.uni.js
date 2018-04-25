const test = require('tape');
const request = require('supertest');
const app = require('../../src/core/server');

test('Verificando la ruta de estado', (t) => {
  request(app)
    .get('/estado')
    .set('authorization', 'a.b.c')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) t.fail(err.message);
      t.equal(res.body.estado, 'ok', 'El servidor responde correctamente');
    });

  t.end();
});
