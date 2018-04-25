const { appConfig } = require('./src/configs');
const server = require('./src/core/server');
const db = require('./src/core/db');

(async () => {
  // TODO add https://github.com/sindresorhus/ora to show loading icons >_<
  try {
    await db();
    server.listen(appConfig.puerto, () => console.error(`Escuchando en el puerto ${appConfig.puerto}\n`)); // eslint-disable-line
  } catch (err) {
    console.error('Error al iniciar la aplicación', err); // eslint-disable-line
  }
})();

