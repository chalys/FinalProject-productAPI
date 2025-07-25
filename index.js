import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import authRoutes from "./src/routes/auth.routes.js"
import productsRoutes from "./src/routes/products.routes.js";
import errorHandler from "./src/middlewares/error.middleware.js";

//dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res, next) => {
  res.send({ success: true, message: "API Rest en Node.js" });
});

// Module Rutes
app.use('/auth', authRoutes);
app.use("/api/products", productsRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Ruta no encontrada" });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});