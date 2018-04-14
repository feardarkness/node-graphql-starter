const { app } = require('./src/configs');
const server = require('./src/server');

server.listen(app.port, () => {
  console.log(`.... Escuchando en el puerto ${app.port}`); // eslint-disable-line
});
