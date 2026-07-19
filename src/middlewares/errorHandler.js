const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  logger.error(err.message);

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Error interno del servidor",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack
  });
};

module.exports = errorHandler;
