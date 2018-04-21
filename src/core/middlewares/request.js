const logger = require('../logger');

module.exports = (req, res, next) => {
  logger.info({
    request: {
      baseUrl: req.baseUrl,
      url: req.originalUrl,
      method: req.method,
      params: req.params,
      headers: req.headers,
    },
  });
  next();
};
