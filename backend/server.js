require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/User.Route");
const salesRouter = require("./routes/sales.route");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("homepeage");
});

app.use("/users", userRouter);
app.use("/sales", salesRouter);

app.listen(4000, async () => {
  try {
    await connection;
    console.log("Connected to db!");
  } catch (error) {
    console.log(error.message);
  }
  console.log("server running at port 5000");
});
