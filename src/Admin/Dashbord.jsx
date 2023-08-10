import React from "react";
import cryptopaymenthistory from "../assets/json/cryptopaymenthistory.json"
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="col-lg-12">
      <div className="row mb-4">
        <div className="col-2">
          <h6>Total Balance</h6>
          <h3>$1,137,987</h3>
        </div>
        <div className="col-2">
          <h6>Crypto</h6>
          <h3>$459,872</h3>
        </div>
        <div className="col-2">
          <h6>Fiat</h6>
          <h3>$678,115</h3>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-2">
          <div className="card p-3">
            <h5 ><span className="text-white">Bitcoin</span> (BTC) </h5>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-lg-6">
          <div className="card">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">User ID</th>
                  <th scope="col" className="text-uppercase">Name</th>
                  <th scope="col" className="text-uppercase">Assets</th>
                  <th scope="col" className="text-uppercase">Amount</th>
                  <th scope="col" className="text-uppercase text-center">Type</th>
                  <th scope="col" className="text-uppercase text-center">Date & Time</th>
                  <th scope="col" className="text-uppercase text-center">Action </th>
                </tr>
              </thead>
              <tbody>
                {cryptopaymenthistory.map((item, index) => (
                  <tr>
                    <th>{item.userid}</th>
                    <td>{item.name}</td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">
                    <span className={`text-center badge badge-lg ${item.type === "RECEIVE" ? "badge-success" : "badge-danger"}`}>{item.type}</span>
                    </td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                      <Link to={`paymenthistory/${item.id}`} className="btn btn-sm btn-secondary">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">User ID</th>
                  <th scope="col" className="text-uppercase">Name</th>
                  <th scope="col" className="text-uppercase">Assets</th>
                  <th scope="col" className="text-uppercase">Amount</th>
                  <th scope="col" className="text-uppercase text-center">Type</th>
                  <th scope="col" className="text-uppercase text-center">Date & Time</th>
                  <th scope="col" className="text-uppercase text-center">Action </th>
                </tr>
              </thead>
              <tbody>
                {cryptopaymenthistory.map((item, index) => (
                  <tr>
                    <th>{item.userid}</th>
                    <td>{item.name}</td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">
                    <span className={`text-center badge badge-lg ${item.type === "RECEIVE" ? "badge-success" : "badge-danger"}`}>{item.type}</span>
                    </td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                      <Link to={`paymenthistory/${item.id}`} className="btn btn-sm btn-secondary">View</Link>
                    </td>
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

export default Dashbord;
