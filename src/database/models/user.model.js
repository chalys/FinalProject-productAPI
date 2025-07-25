import { db } from "../../config/firebase.config.js";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import bcrypt from 'bcryptjs';

const usersCollection = collection(db, "users");

// Hash de contraseña
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

// Comparar contraseña
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const getUserByUsername = async (username) => {
    try {
        const userRef = doc(usersCollection, username);
        const snapshot = await getDoc(userRef);

        if (!snapshot.exists()) {
            return null;
        }

        return { id: snapshot.id, ...snapshot.data() };
    } catch (error) {
        throw new Error("Error al obtener usuario: " + error.message);
    }
};

export const createUser = async (userData) => {
    try {
        const { username, password, role = 'user' } = userData;

        if (!username || !password) {
            throw new Error("Username y password son requeridos");
        }

        const hashedPassword = await hashPassword(password);
        const userRef = doc(usersCollection, username);

        await setDoc(userRef, {
            username,
            password: hashedPassword,
            role,
            createdAt: new Date().toISOString()
        });

        return { username, role };
    } catch (error) {
        throw new Error("Error al crear usuario: " + error.message);
    }
};

export const validateUser = async (username, password) => {
    try {
        const user = await getUserByUsername(username);

        if (!user) {
            return null;
        }

        const isValid = await comparePassword(password, user.password);

        if (!isValid) {
            return null;
        }

        return { id: user.id, username: user.username, role: user.role };
    } catch (error) {
        throw new Error("Error al validar usuario: " + error.message);
    }
};