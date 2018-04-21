const test = require('tape');
const logger = require('../../src/core/logger');

test('Verificando el servidor de Rest', (t) => {
  t.equal(typeof logger.info, 'function', 'El logger debe tener el tipo info');
  t.equal(typeof logger.debug, 'function', 'El logger debe tener el tipo debug');
  t.equal(typeof logger.error, 'function', 'El logger debe tener el tipo error');
  t.equal(typeof logger.fatal, 'function', 'El logger debe tener el tipo fatal');
  t.end();
});
