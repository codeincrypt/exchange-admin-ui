import React from "react";
import { TbReload } from "react-icons/tb";

import cryptobalance from "../assets/json/cryptobalance.json";

const CryptoBalance = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          <div class="search mb-3">
            <input class="input-elevated" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-7"></div>
        <div className="col-lg-1">
          <button
            className="btn btn-secondary float-right"
            title="Reload all balance"
          >
            <TbReload />
          </button>
        </div>
      </div>
      <div className="card">
        <table class="table table-lg">
          <tbody>
            {cryptobalance.map((item, index) => (
              <tr>
                <td width="8%" className="text-center">
                  <img
                    src={item.icon}
                    alt={item.currency}
                    className="rounded-circle"
                    style={{ width: "42px" }}
                  />
                </td>
                <td width="10%" className="align-middle">
                  {item.currency}{" "}
                  <span className="font-weight-bold ml-2">{item.asset}</span>{" "}
                </td>
                <td width="55%" className="align-middle">
                  {item.address}
                </td>
                <td width="12%" className="align-middle text-center">
                  <h6 className="text-white text-right">{item.balance}</h6>
                </td>
                <td width="5%" className="align-middle">
                  <button
                    className="btn text-white"
                    title={`Reload ${item.currency} (${item.asset}) balance`}
                  >
                    <TbReload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoBalance;
