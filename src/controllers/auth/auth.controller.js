import { login as loginService, register as registerService } from "../../services/auth/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      const error = new Error('Username y password son requeridos');
      error.statusCode = 400;
      throw error;
    }
    
    const { token, user } = await loginService(username, password);
    
    res.json({
      success: true,
      message: 'Autenticación exitosa',
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      const error = new Error('Username y password son requeridos');
      error.statusCode = 400;
      throw error;
    }
    
    const newUser = await registerService({ username, password });
    
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      user: newUser
    });
  } catch (error) {
    next(error);
  }
};