const pino = require('pino');
const noir = require('pino-noir');
const crypto = require('crypto');

/* istanbul ignore next */
module.exports = pino({
  level: process.env.LOG_LEVEL || 'debug',
  name: 'node-react',
  serializers: noir(['request.headers.authorization'], val => crypto.createHash('sha256').update(val).digest('base64')),
});
