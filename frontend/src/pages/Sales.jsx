import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";

const Sales = () => {
  const [sales, setSales] = useState([]);

  const getTopFive = () => {
    axios
      .get(`${API_BASE_URL}/sales/topsales`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error fetching sales");
        }
        return response.data;
      })
      .then((data) => setSales(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTopFive();
  }, []);

  return (
    <div>
      <div className="mt-3">
        <h3>TOP 5 SALES</h3>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sales Id:</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={sale._id}>
                <th scope="row">{index + 1}</th>
                <td>{sale._id}</td>
                <td>{sale.productName}</td>
                <td>{sale.quantity}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
