const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const SalesModel = mongoose.model("sales", salesSchema);
module.exports = SalesModel;
