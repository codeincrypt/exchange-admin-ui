import React from "react";
import cryptosendreceive from "../assets/json/cryptosendreceive.json";

const Operations = () => {
  return (
    // Main container for the operations
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          {/* Search input */}
          <div class="search mb-3">
            <input class="input-elevated" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-3"> </div>
        <div className="col-lg-2">
          {/* Select for status */}
          <select className="form-control-dark form-control">
            <option>Pending</option>
            <option>Approved</option>
            <option>Reject</option>
          </select>
        </div>
        <div className="col-lg-2">
          {/* Select for asset */}
          <select className="form-control-dark form-control">
            <option>BTC</option>
            <option>LTC</option>
            <option>ETH</option>
            <option>SOL</option>
            <option>BNB</option>
          </select>
        </div>
        <div className="col-lg-1">
          {/* Filter button */}
          <button type="button" className="btn btn-secondary btn-block">Filter</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            {/* Table for displaying the data */}
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">
                    Txn ID
                  </th>
                  <th scope="col" className="text-uppercase">
                    Name
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Assets
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Sender Address
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Receiver Address
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Amount
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Date & Time
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping the data to create rows */}
                {cryptosendreceive.filter((item) => item.type === "SEND").map((item, index) => (
                  <tr>
                    <td>{item.transactionid}</td>
                    <td>
                      {item.name} <br />
                      {item.userid}
                    </td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center" title={item.sender}>{item.sender.substring(0, 5)}.....{item.sender.substring(20, 30)}</td>
                    <td className="text-center" title={item.receiver}>{item.receiver.substring(0, 5)}.....{item.receiver.substring(20, 30)}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                      {/* Buttons for actions */}
                      <button className="btn btn-warning btn-sm ml-2"> View </button>
                      <button className="btn btn-success btn-sm ml-2"> Approve </button>
                      <button className="btn btn-danger btn-sm ml-2"> Reject </button>
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


export default Operations;
