import React, { useState } from "react";
import "./AddSales.css";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSales = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestData = { productName, quantity, amount };
    await axios
      .post(`${API_BASE_URL}/sales/addsales`, requestData)
      .then((result) => {
        if (result.status === 201) {
          toast.success("Sales Added successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        setProductName("");
        setQuantity("");
        setAmount("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Fill the required fields correctly!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div className="mt-3">
        <h3>ADD SALE ENTRY</h3>
      </div>
      <div className="Size p-3 shadow-sm">
        <div className="mb-3">
          <label className="float-start form-label">Product Name</label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Quantity</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="d-grid gap-2">
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="button"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddSales;
