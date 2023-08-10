import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../assets/import.css";
import logo from "../assets/images/icon-logo.png";

const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };

  const handleSubmit = async () => {
    navigate('/admin')
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 col-12 text-center ">
          <div className="login-card">
            <img src={logo} alt="binance" className="login-logo" />
            <h2 className="text-white my-3">Admin Login </h2>
            <Form.Control
              className="form-control-dark"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              type="text"
              className="form-control-dark mt-2"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <div className="text-center mt-3">
              <button className="btn btn-warning btn-block" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
