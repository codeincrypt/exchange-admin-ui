import React from "react";
import cryptosendreceive from "../assets/json/cryptosendreceive.json"
import { Link } from "react-router-dom";

const Operations = () => {
  return (
      <div className='col-lg-12'>
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
                {cryptosendreceive.map((item, index) => (
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
  )
}

export default Operations