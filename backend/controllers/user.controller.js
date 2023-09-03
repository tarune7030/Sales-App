const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(400).send("User already registered!");
  } else {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      const user = new UserModel({
        email,
        firstName,
        lastName,
        password: hash,
      });
      await user.save();
      res.status(200).send(user);
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(404).send("User not found, please signup!");
  } else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ userID: user._id }, "goku");
        res.status(200).send({ user, token });
      } else {
        res.status(400).send("wrong credentials!");
      }
    });
  }
};

const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).send(users);
};

module.exports = { register, getAllUsers, login };
