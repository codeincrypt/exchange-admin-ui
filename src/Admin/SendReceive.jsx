import React from "react";
import cryptosendreceive from "../assets/json/cryptosendreceive.json";
import { Link } from "react-router-dom";

const SendReceive = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          <div class="search mb-3">
            <input class="input-elevated" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-3"> </div>
        <div className="col-lg-2">
          <select className="form-control-dark form-control">
            <option>Send</option>
            <option>Receive</option>
          </select>
        </div>
        <div className="col-lg-2">
          <select className="form-control-dark form-control">
            <option>BTC</option>
            <option>LTC</option>
            <option>ETH</option>
            <option>SOL</option>
            <option>BNB</option>
          </select>
        </div>
        <div className="col-lg-1">
          <button type="button" className="btn btn-secondary btn-block">Filter</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
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
                    Amount
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Txn Hash
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Type
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
                {cryptosendreceive.map((item, index) => (
                  <tr>
                    <td>{item.transactionid}</td>
                    <td>
                      {item.name} <br />
                      {item.userid}
                    </td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">
                      {item.txnhash.substring(0, 5)}.....
                      {item.txnhash.substring(30, 40)}
                    </td>
                    {/* <td className="text-center">{item.txnhash}</td> */}
                    <td className="text-center">
                      <span
                        className={`text-center badge badge-lg ${
                          item.type === "RECEIVE"
                            ? "badge-success"
                            : "badge-danger"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                      <Link
                        to={`/send-receive/${item.transactionid}`}
                        className="btn btn-sm btn-secondary"
                      >
                        View
                      </Link>
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

export default SendReceive;
