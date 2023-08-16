import React from "react";
import SettingSidebar from "../Components/SettingSidebar";
import admin from "../../assets/json/admin.json";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          <div className="card pb-5 pt-1">
            <div className="col-lg-12 p-3 text-right">
              <button className="btn btn-secondary">
                Add New Admin
              </button>
            </div>
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
                    Email
                  </th>
                  <th scope="col" className="text-uppercase">
                    Phone
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    type
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Session
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Last login
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {admin.map((item, index) => (
                  <tr>
                    <td>{item.userid}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="text-center">{item.type}</td>
                    <td className="text-center">
                      <span
                        className={`text-center badge badge-lg ${
                          item.session === "Active"
                            ? "badge-success"
                            : "badge-danger"
                        }`}
                      >
                        {item.session}
                      </span>
                    </td>
                    <td className="text-center">{item.loggedin}</td>
                    <td className="text-center">
                      <Link
                        to={`/setting/admin/${item.id}`}
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

export default ChangePassword;
