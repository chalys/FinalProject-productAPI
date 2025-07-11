import express from "express";
const router = express.Router();

import { getAllProducts } from "../controllers/products/getAllProducts.controller.js";
import { getProductById } from "../controllers/products/getProductById.controller.js";
import { createProduct } from "../controllers/products/createProduct.controller.js";
import { updateProduct } from "../controllers/products/updateProduct.controller.js";
import { deleteProduct } from "../controllers/products/deleteProduct.controller.js";

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
