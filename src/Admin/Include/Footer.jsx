import React from "react";
import { Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="col-lg-12">
      <div className="col-lg-12">
        <div className="row">
          <p className="text-white">Design by - Kartik Swarnkar</p>
          <Link
            className="ml-3 text-white"
            to="https://www.linkedin.com/in/codeincrypt/"
          >
            {" "}
            <BsLinkedin /> LinkedIn{" "}
          </Link>
          <Link className="ml-3 text-white" to="https://github.com/codeincrypt">
            {" "}
            <AiFillGithub /> Github{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
