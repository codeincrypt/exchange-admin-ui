import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import fiat from "../assets/json/fiat.json";
import RightSidebar from "./Components/RightSidebar";

const Fiat = () => {
  let navigate = useNavigate();
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();
  let orderid = searchParams.get('orderid')
  const [viewcard, setViewcard] = useState(false);
  const [viewdata, setViewdata] = useState({});
  const [datalist, setDatalist] = useState(fiat);
  const [datalistbackup] = useState(fiat);

  const onChangeSearch = (e) => {
    var searchString = e.toString().toLowerCase();
    const result = datalistbackup.filter((item) => {
      return (
        item.name.toLowerCase().match(searchString) ||
        item.orderid.toLowerCase().match(searchString) ||
        item.amount.toLowerCase().match(searchString) ||
        item.currency.toLowerCase().match(searchString) ||
        item.senderbank.toLowerCase().match(searchString)
      );
    });
    setDatalist(result);
  };

  const closeRightSidebar = (data) => {
    navigate('/fiat');
  };

  useEffect(() => {
    if(orderid !== ''){
      setViewcard(true);
      setViewdata(datalist.find((item) => item.orderid === orderid));
    }
  }, [orderid, datalist]);

  return (
    <React.Fragment>
      <RightSidebar viewdata={viewdata} openRightSidebar={viewcard} closeRightSidebar={closeRightSidebar} orderid={orderid} />
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-4">
            <div class="search mb-3">
              <input
                class="input-elevated"
                type="text"
                placeholder="Search"
                onChange={(e) => onChangeSearch(e.target.value)}
              />
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
            <button type="button" className="btn btn-secondary btn-block">
              Filter
            </button>
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
                      Amount
                    </th>
                    <th scope="col" className="text-uppercase text-center">
                      Bank Name
                    </th>
                    <th scope="col" className="text-uppercase text-center">
                      Bank Account
                    </th>
                    <th scope="col" className="text-uppercase text-center">
                      Beneficiary Name
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
                  {datalist.map((item, index) => (
                    <tr>
                      <td>{item.orderid}</td>
                      <td>
                        {item.name} <br />
                        {item.userid}
                      </td>
                      <td className="text-center">{item.amount}</td>
                      <td className="text-center">{item.senderbank}</td>
                      <td className="text-center">{item.senderbankac}</td>
                      <td className="text-center">{item.senderbeneficiary}</td>
                      <td className="text-center">
                        <span
                          className={`text-center badge badge-lg ${
                            item.type === "DEPOSIT"
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
                          to={`/fiat?orderid=${item.orderid}`}
                          className="btn btn-sm btn-warning"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pl-3">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <button class="page-link">Previous</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">1</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">2</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">3</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">Next</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fiat;
