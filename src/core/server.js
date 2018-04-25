const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('./graphql');
const bodyParser = require('body-parser');

const app = express();

console.log('-> Cargando middlewares globales antes de las rutas'); // eslint-disable-line
app.use(bodyParser.json());
app.use(require('./middlewares/request-logger'));


console.log('-> Cargando graphql'); // eslint-disable-line
app.use('/graphql', graphqlExpress);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


console.log('-> Cargando rutas'); // eslint-disable-line
app.use('/estado', (req, res) => {
  res.json({
    estado: 'ok',
  });
});


console.log('-> Cargando middlewares globales despues de las rutas'); // eslint-disable-line
// WIP middlewares despues de rutas globales

module.exports = app;
