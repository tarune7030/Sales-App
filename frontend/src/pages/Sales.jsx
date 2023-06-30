import React from "react";

const Sales = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>SI212</td>
              <td>Laptop</td>
              <td>2</td>
              <td>90000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SI423</td>
              <td>Mobile</td>
              <td>5</td>
              <td>85000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
