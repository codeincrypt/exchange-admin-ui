import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="col-lg-12">
      <div className="card text-center" style={{height: "80vh", paddingTop:'14%'}}>
        <h1 className="">404</h1>
        <h3 className="">Page not found</h3>
        <Link className="btn btn-lg btn-secondary mt-3" to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
