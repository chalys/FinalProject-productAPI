import { db } from "../../config/firebase.config.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error("Error al obtener productos: " + error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    throw new Error("Error al obtener producto: " + error.message);
  }
};

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    throw new Error("Error al crear producto: " + error.message);
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData);
    return { id, ...productData };
  } catch (error) {
    throw new Error("Error al actualizar producto: " + error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    throw new Error("Error al eliminar producto: " + error.message);
  }
};
