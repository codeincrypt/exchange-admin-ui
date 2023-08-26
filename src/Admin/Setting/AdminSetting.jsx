import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Button, Modal} from 'react-bootstrap';

import SettingSidebar from "../Components/SettingSidebar";
import admin from "../../assets/json/admin.json";

const ChangePassword = () => {
  // const [show, setShow] = useState(false);
  const [viewcard, setViewcard] = useState(1);

  const showList = () => setViewcard(1);
  const showAddNew = () => setViewcard(2);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          {viewcard === 1 ? (
            <div className="card pb-5 pt-1">
              <div className="col-lg-12 p-3 text-right">
                <button className="btn btn-secondary" onClick={showAddNew}>
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
                          className="btn btn-sm btn-warning mr-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/setting/admin/${item.id}`}
                          className="btn btn-sm btn-success"
                        >
                          Access
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="card pb-5 pt-1">
              <div className="col-lg-12 p-3 text-right">
                <button className="btn btn-secondary" onClick={showList}>
                  Admin List
                </button>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div class="form-group">
                    <label for="oldpass">Name</label>
                    <input
                      className="form-control form-control-dark"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>

                  <div class="form-group">
                    <label for="emailid">Email ID</label>
                    <input
                      className="form-control form-control-dark"
                      id="emailid"
                      name="emailid"
                      type="email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="contact">Mobile Number</label>
                    <input
                      className="form-control form-control-dark"
                      id="contact"
                      name="contact"
                      type="number"
                    />
                  </div>

                  <div class="form-group">
                    <label for="newpass">User type</label>
                    <select className="form-control form-control-dark" id="newpass" name="newpass" type="text">
                      <option>Admin</option>
                      <option>Moderators</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="newpass">Status</label>
                    <select
                      className="form-control form-control-dark"
                      id="newpass"
                      name="newpass"
                      type="text"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <button type="button" className="btn btn-warning btn-block">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ChangePassword;
