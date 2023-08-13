import React from "react";
import users from "../assets/json/users.json";
import { Link } from "react-router-dom";

const Users = () => {
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
            <option>KYC Yes</option>
            <option>KYC No</option>
            <option>KYC Tier 1</option>
            <option>KYC Tier 2</option>
          </select>
        </div>
        <div className="col-lg-2">
          <select className="form-control-dark form-control">
            <option>Active</option>
            <option>Blocked</option>
          </select>
        </div>
        <div className="col-lg-1">
          <button type="button" className="btn btn-secondary btn-block">Filter</button>
        </div>
      </div>
      <div className="card">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase">
                Customer ID
              </th>
              <th scope="col" className="text-uppercase">
                Name
              </th>
              <th scope="col" className="text-uppercase">
                Email
              </th>
              <th scope="col" className="text-uppercase">
                Phone
              </th>
              <th scope="col" className="text-uppercase text-center">
                KYC
              </th>
              <th scope="col" className="text-uppercase text-center">
                Status
              </th>
              <th scope="col" className="text-uppercase text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr>
                <td>{item.userid}</td>
                <td>{item.name} </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className="text-center">
                  {item.kyc === "1" ? (
                    <span className="badge-warning badge badge-lg">Tier 1</span>
                  ) : item.kyc === "2" ? (
                    <span className="badge-warning badge badge-lg">Tier 2</span>
                  ) : item.kyc === "3" ? (
                    <span className="badge-success badge badge-lg">
                      Verified
                    </span>
                  ) : (
                    <span className="badge-danger badge badge-lg">No KYC</span>
                  )}
                </td>
                <td className="text-center">
                  {item.status === "1" ? (
                    <span className="badge-success badge badge-lg">Active</span>
                  ) : (
                    <span className="badge-danger badge badge-lg">Blocked</span>
                  )}
                </td>
                <td className="text-center">
                  <Link
                    to={`/users/${item.id}`}
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
  );
};

export default Users;
