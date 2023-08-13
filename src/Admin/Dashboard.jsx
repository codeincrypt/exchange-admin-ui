import React from "react";
import cryptosendreceive from "../assets/json/cryptosendreceive.json";
import cryptobalance from "../assets/json/cryptobalance.json";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="col-lg-12">
      <div className="row mb-4">
        <div className="col-2">
          <h6>Total Balance</h6>
          <h3>$137,987</h3>
        </div>
        <div className="col-2">
          <h6>Crypto</h6>
          <h3>$59,872</h3>
        </div>
        <div className="col-2">
          <h6>Fiat</h6>
          <h3>$78,115</h3>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-9">
          <div className="row">
            {cryptobalance.map((item, index) => (
              <div className="col-lg-2">
                <div className="card p-3">
                  <h6>
                    <span className="text-white"> {item.currency} </span>(
                    {item.asset})
                  </h6>
                  <hr />
                  <h5 className="text-white"> {item.balance}</h5>
                  <h6 className="font-weight-light mb-1 mt-2">Balance</h6>
                  <h6 className="text-white">{item.usd}</h6>
                  <h6 className="font-weight-light mb-1 mt-2">Customer Hold</h6>
                  <h6 className="text-white">{item.customer}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-3">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">
                    User ID
                  </th>
                  <th scope="col" className="text-uppercase">
                    Name
                  </th>
                  <th scope="col" className="text-uppercase">
                    Assets
                  </th>
                  <th scope="col" className="text-uppercase">
                    Amount
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
                    <th>{item.userid}</th>
                    <td>{item.name}</td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center">{item.amount}</td>
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
                        to={`payment-history/${item.id}`}
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

        <div className="col-lg-6">
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
                  <th scope="col" className="text-uppercase">
                    Assets
                  </th>
                  <th scope="col" className="text-uppercase">
                    Amount
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
                    <td>{item.name} <br />
                    {item.userid}
                    </td>
                    <td className="text-center">{item.assets}</td>
                    <td className="text-center">{item.amount}</td>
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
                      <Link to={`send-receive/${item.id}`} className="btn btn-sm btn-secondary" >
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

export default Dashbord;
