const express = require("express");

const {
  addSales,
  topSales,
  totalRevenue,
} = require("../controllers/sales.controller");

const salesRouter = express.Router();

salesRouter.post("/addsales", addSales);

salesRouter.get("/topsales", topSales);

salesRouter.get("/revenue", totalRevenue);

module.exports = salesRouter;
