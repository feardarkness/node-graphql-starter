module.exports = {
  ip: process.env.DB_IP || '127.0.0.1',
  puerto: process.env.DB_PORT || 27017,
  nombre: process.env.DB_NAME || 'node-graphql-starter',
  auth: {
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASS || '',
  },
  debug: process.env.DB_DEBUG || true,
};
