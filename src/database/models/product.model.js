import { db } from '../../config/firebase.config.js';
import { collection, getDocs } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw new Error('Error al obtener productos: ' + error.message);
  }
};