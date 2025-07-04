import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import errorHandler from "./src/middlewares/error.middleware.js";

dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send({ message: "API Rest en Node.js" });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
