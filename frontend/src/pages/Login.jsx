import React, { useState } from "react";
import "./AddSales.css";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ handleUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestData = { email, password };
    axios
      .post(`${API_BASE_URL}/users/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          localStorage.setItem("user", JSON.stringify(result.data));
          handleUser(result.data);
          navigate("/Sales");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Some error occurred please try again later!", {
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
        <h3>LOGIN FORM</h3>
      </div>
      <div className="Size p-3 shadow-sm">
        <div className="mb-3">
          <label className="float-start form-label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-3">
          <label className="float-start form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="formGroupExampleInput"
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

export default Login;
