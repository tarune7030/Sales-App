const express = require("express");
const {
  register,
  getAllUsers,
  login,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/signup", register);

userRouter.post("/login", login);

module.exports = userRouter;
