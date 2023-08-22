import React from "react";
import { Link } from "react-router-dom";

import cryptobalance from "../assets/json/cryptobalance.json";

const CryptoBalance = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <span>
                <span className="h5">Send & Receive</span>
                <button className="btn btn-secondary float-right">
                  View All
                </button>
              </span>
            </div>
            <table class="table">
              <tbody>
                {cryptobalance.map((item, index) => (
                  <tr>
                    <td>
                      <img src={item.icon} className="rounded-circle" style={{ width: "40px" }} />
                    </td>
                    <td>{item.currency}</td>
                    <td>{item.asset}</td>
                    <td>{item.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoBalance;
