import { generateToken } from "../../config/jwt.config.js";
import { validateUser, createUser } from "../../database/models/user.model.js";

export const login = async (username, password) => {
  const user = await validateUser(username, password);
  
  if (!user) {
    const error = new Error('Credenciales inválidas');
    error.statusCode = 401;
    throw error;
  }
  
  const token = generateToken(user);
  return { token, user };
};

export const register = async (userData) => {
  return await createUser(userData);
};