import React from "react";
import "./AddSales.css";

const Login = () => {
  return (
    <div>
      <div className="mt-3">
        <h3>LOGIN FORM</h3>
      </div>
      <div className="Size p-3 shadow-sm">
        <div className="mb-3">
          <label className="float-start form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput"
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

export default Login;
