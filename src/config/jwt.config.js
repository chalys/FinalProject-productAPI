import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};