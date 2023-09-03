import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Revenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/sales/revenue`)
      .then((response) => setTotalRevenue(response.data.totalRevenue))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="mt-3">
        <h3>TODAY'S REVENUE IS :</h3>
        {totalRevenue ? (
          <h1
            className="fw-bolder"
            style={{
              color: "black",
              width: " max-content",
              margin: "auto",
              padding: "14px",
              borderRadius: "8px",
            }}
          >
            ₹ {totalRevenue}
          </h1>
        ) : (
          <h2>loading total revenue...</h2>
        )}
      </div>
    </div>
  );
};

export default Revenue;
