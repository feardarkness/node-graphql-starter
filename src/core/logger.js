const pino = require('pino');
const noir = require('pino-noir');
const crypto = require('crypto');

module.exports = pino({
  level: process.env.LOG_LEVEL || 'debug',
  name: 'node-react',
  serializers: noir(['req.headers.authorization'], val => crypto.createHash('sha256').update(val).digest('base64')),
});
