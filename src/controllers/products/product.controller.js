import { getAllProducts as getAllProductsService } from "../../services/products/product.service.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    res.json({ success: true, data: products });
  } catch (error) {
    next({
      statusCode: 500,
      message: "Error al obtener los productos",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};
