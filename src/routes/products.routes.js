import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/products/product.controller.js";

const router = Router();

// Rutas públicas
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Rutas protegidas (requieren autenticación)
router.post("/", authenticate(['admin', 'user']), createProduct);
router.put("/:id", authenticate(['admin', 'user']), updateProduct);
router.delete("/:id", authenticate(['admin']), deleteProduct);
export default router;
