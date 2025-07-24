import { verifyToken } from "../config/jwt.config.js";

export const authenticate = (roles = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const error = new Error('Token no proporcionado');
        error.statusCode = 401;
        throw error;
      }
      
      const token = authHeader.split(' ')[1];
      const decoded = verifyToken(token);
      
      // Verificar roles si se especificaron
      if (roles.length > 0 && !roles.includes(decoded.role)) {
        const error = new Error('No autorizado');
        error.statusCode = 403;
        throw error;
      }
      
      req.user = decoded;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        error.message = 'Token inválido';
        error.statusCode = 401;
      }
      
      if (error.name === 'TokenExpiredError') {
        error.message = 'Token expirado';
        error.statusCode = 401;
      }
      
      next(error);
    }
  };
};