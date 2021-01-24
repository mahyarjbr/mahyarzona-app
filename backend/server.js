import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./Routes/ProductsRouters.js";
import userRouter from "./Routes/UserRouters.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/mahyarzona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log("serve at http://localhost:5000");
});
