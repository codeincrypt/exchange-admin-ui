import React, { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // eslint-disable-next-line
  const { dispatch } = useContext(UserContext);
  let navigate = useNavigate();

  const Logout = () => navigate("/login")
  const redirect = e => navigate(e)

  const switchMode = () => {
    
  }

  return (
    <React.Fragment>
      <Navbar className="bg-dark text-white">
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
                <button className="btn btn-secondary" onClick={switchMode}> <i className="fa fa-sun"></i> </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2">
                <button className="btn btn-secondary" onClick={(e) => redirect("/profile")}> <i className="fa fa-user"></i> </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2" >
                <button className="btn btn-secondary" onClick={(e) => redirect("/setting")}> <i className="fa fa-cog"></i> </button>
              </Nav.Link>

              <Nav.Link className="p-0 ml-2">
                <button className="btn btn-secondary" onClick={Logout}> <i className="fa fa-sign-out-alt"></i> </button>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
