import {
  getAllProducts as getAllProductsModel,
  getProductById as getProductByIdModel,
  createProduct as createProductModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../../database/models/product.model.js";

export const getAllProducts = async () => {
  try {
    return await getAllProductsModel();
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};

export const getProductById = async (id) => {
  try {
    if (!id) throw new Error("ID no proporcionado");
    return await getProductByIdModel(id);
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};

export const createProduct = async (productData) => {
  try {
    if (!productData) throw new Error("Datos del producto no proporcionados");
    return await createProductModel(productData);
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};

export const updateProduct = async (id, data) => {
  try {
    if (!id || !data) throw new Error("Datos incompletos para actualización");
    return await updateProductModel(id, data);
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    if (!id) throw new Error("ID no proporcionado");
    return await deleteProductModel(id);
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};