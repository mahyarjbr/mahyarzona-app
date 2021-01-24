import express from "express";
import User from "../Models/UserModel.js";
import data from "./../data.js";
import expressasyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "./../Utils/Utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressasyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressasyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          name: user.name,
          _id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "email or password is invalid" });
  })
);
userRouter.post(
  "/register",
  expressasyncHandler(async (req, res) => {
    //await User.remove({});
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser =  await user.save();
    res.send({
      name: createdUser.name,
      _id: createdUser._id,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

export default userRouter;
