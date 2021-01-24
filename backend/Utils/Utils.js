import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      name: user.name,
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: "30d",
    }
  );
};
