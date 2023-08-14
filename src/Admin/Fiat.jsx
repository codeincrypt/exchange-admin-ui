import React from "react";
import buysellhistory from "../assets/json/buysellhistory.json";
import { Link } from "react-router-dom";

const Fiat = () => {
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
            <option>Deposit</option>
            <option>Withdrawal</option>
          </select>
        </div>
        <div className="col-lg-2">
          <select className="form-control-dark form-control">
            <option>INR</option>
            <option>USD</option>
            <option>AED</option>
            <option>EURO</option>
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
                    Pair
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Price
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Qty.
                  </th>
                  <th scope="col" className="text-uppercase text-center">
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
                {buysellhistory.map((item, index) => (
                  <tr>
                    <td>{item.transactionid}</td>
                    <td>
                      {item.name} <br />
                      {item.userid}
                    </td>
                    <td className="text-center">{item.pair}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">
                      <span
                        className={`text-center badge badge-lg ${
                          item.type === "BUY"
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
                        to={`/buy-sell/${item.transactionid}`}
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

export default Fiat;
