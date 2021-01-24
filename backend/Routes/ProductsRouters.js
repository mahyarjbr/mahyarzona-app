import express from "express";
import expressasyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";
import data from "./../data.js";

const productsRouter = express.Router();

productsRouter.get(
  "/",
  expressasyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);
productsRouter.get(
  "/seed",
  expressasyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);
productsRouter.get(
  "/:id",
  expressasyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productsRouter;
