import React, { Component, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="#home">
            <img
              id="logo"
              alt=""
              src="static/images/logo/logo_white_45.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" defaultActiveKey="#home">
              <Nav.Link className="navbar-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <style>
          {`
            .navbar-link {
              margin-left: 20px;
              margin-right: 20px;
            }
            .navbar-dark .navbar-nav .show>.nav-link, .navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {
              color: #00ffff;
          }
          `}
        </style>
      </Fragment>
    );
  }
}
export default Header;
