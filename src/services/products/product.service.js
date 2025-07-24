import { getAllProducts as getAllProductsModel } from "../../database/models/product.model.js";

export const getAllProducts = async () => {
  return await getAllProductsModel();
};
