const errorHandler = (err, req, res, next) => {
  // Log del error
  console.error(`[${new Date().toISOString()}] Error:`, err.stack);

  // Determinar el código de estado
  const statusCode = err.statusCode || 500;
  
  // Mensaje de error seguro para producción
  const isProduction = process.env.NODE_ENV === 'production';
  const message = isProduction && statusCode === 500 
    ? 'Error interno del servidor' 
    : err.message || 'Error interno del servidor';

  // Respuesta de error
  const errorResponse = {
    success: false,
    message,
    ...(!isProduction && { 
      stack: err.stack,
      details: err.details,
      path: req.path,
      method: req.method 
    })
  };

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;