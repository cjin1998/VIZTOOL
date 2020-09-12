import React from "react";
import "./NaviBar.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./logo_test2.png";
import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <div id="mainBar">
      <Navbar variant="dark" color="#FFFFFF" className="barColor">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="250"
            height="94"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav className="navbar-nav ml-auto" id="buttons">
          <Nav.Link>
            <Link to="/" id="buttons1">
              WORLD
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Countries" id="buttons4">
              DRILL DOWN
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Collaborate" id="buttons3">
              DONATE/VISUALIZE
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default NaviBar;
