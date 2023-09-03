const SalesModel = require("../models/sales.model");

// adding new sales

const addSales = (req, res) => {
  const { productName, quantity, amount } = req.body;
  if (!productName || !quantity || !amount) {
    res.status(400).json({ err: "Fill all the mandatory Fields" });
  } else {
    const addSales = new SalesModel({
      productName: productName,
      quantity: quantity,
      amount: amount,
    });
    addSales
      .save()
      .then((newSales) => {
        res.status(201).json({ sales: newSales });
      })
      .catch((err) => {
        res.status(401).json({ err: "something went wrong" });
        console.log(err);
      });
  }
};

// top 5 sales

const topSales = async (req, res) => {
  const data = await SalesModel.find().sort({ amount: -1 }).limit(5);
  res.status(200).send(data);
};

// revenue

const totalRevenue = async (req, res) => {
  try {
    const result = await SalesModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amount" },
        },
      },
    ]);
    res.json({ totalRevenue: result[0].totalRevenue });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Some server error occured while fetching the revenue",
    });
  }
};
module.exports = { addSales, topSales, totalRevenue };
