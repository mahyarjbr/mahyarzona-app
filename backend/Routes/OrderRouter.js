import express from "express";
import  expressasyncHandler  from "express-async-handler";
import Order from "../Models/OrderModel.js";
import { isAuth } from "../Utils/Utils.js";

const OrderRouter = express.Router();

OrderRouter.post(
  "/",
  isAuth,
  expressasyncHandler(async (req, res) => {
    if (req.body.orderItems === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);

export default OrderRouter;
