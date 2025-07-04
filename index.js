import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from "./src/middlewares/error.middleware.js";
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

//Routes
//app.use('/api/products', (req, res)=>{res.send('API Rest en Node.js2')});
app.get("/", (req, res) => {
  res.send({ message: "API Rest en Node.js" });
});

// Error Handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
