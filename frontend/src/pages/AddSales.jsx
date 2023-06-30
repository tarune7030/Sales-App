import React from "react";
import "./AddSales.css";

const AddSales = () => {
  return (
    <div>
      <div className="mt-3">
        <h3>ADD SALE ENTRY</h3>
      </div>
      <div className="Size p-3 shadow-sm">
        <div className="mb-3">
          <label className="float-start form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Quantity</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSales;
