import React, { useContext, useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

import { LiaCogSolid } from 'react-icons/lia';
import { BiUser, BiLogIn } from 'react-icons/bi';
import { FaSun } from 'react-icons/fa';
import { PiMoonFill } from 'react-icons/pi';

const Header = () => {
  // eslint-disable-next-line
  const { dispatch } = useContext(UserContext);
  let navigate = useNavigate();

  const Logout = () => navigate("/login")
  const redirect = e => navigate(e)

  const [icon, setIcon] = useState(false);

  const switchMode = () => {
    var element = document.getElementById("darkmode");
    if (element.classList.contains('dark-mode')) {
      element.classList.remove('dark-mode');
      localStorage.setItem('darkmode', "")
      setIcon(false)
    } else {
      element.classList.add('dark-mode');
      localStorage.setItem('darkmode', "darkmode")
      setIcon(true)
    }
  }

  useEffect(() => {
    var element = document.getElementById("darkmode");
    if (localStorage.getItem('darkmode')) {
      element.classList.add('dark-mode');
      setIcon(true)
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Navbar className="text-white">
          <Navbar.Brand className="text-white">
            Binance Admin Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <div class="search mb-3">
                <input class="input-elevated" type="text" placeholder="Search" />
              </div>

              <Nav.Link className="p-0 ml-2">
                <button className="btn btn-secondary" id="changeMode" title="Change Mode" onClick={switchMode}>
                  {icon ? (<FaSun />) : (<PiMoonFill />)}
                </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2">
                <button className="btn btn-secondary" onClick={(e) => redirect("/profile")}> <BiUser /> </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2" >
                <button className="btn btn-secondary" onClick={(e) => redirect("/setting")}> <LiaCogSolid /> </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2">
                <button className="btn btn-secondary" onClick={Logout}> <BiLogIn /> </button>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
