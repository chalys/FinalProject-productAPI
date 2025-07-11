const errorHandler = (err, req, res, next) => {
  console.error("Error", err.message);

  if (res.headersSent) {
    return next(err);
  }
  const statuse = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";

  res.status.json({ error: true, message });
};
export default errorHandler;
