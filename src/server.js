const express = require('express');

const app = express();

app.use('*', (req, res) => {
  res.json({
    estado: 'ok',
  });
});

module.exports = app;
