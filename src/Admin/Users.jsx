import React from "react";
import users from "../assets/json/users.json";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="col-lg-12">
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
                    Amount
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Status
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
                {users.map((item, index) => (
                  <tr>
                    <td>{item.userid}</td>
                    <td>{item.name} </td>
                    <td>{item.email}</td>
                    <td className="text-center">{item.amount}</td>
                    <td className="text-center">
                      <span
                        className={`text-center badge badge-lg ${
                          item.type === "1"
                            ? "badge-success"
                            : "badge-danger"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">
                      <Link to={`paymenthistory/${item.id}`} className="btn btn-sm btn-secondary" >
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
