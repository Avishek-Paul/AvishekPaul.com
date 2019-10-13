import React, { Component, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HeaderLink } from "./HeaderLink";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="#">
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
            <Nav className="mr-auto">
              <HeaderLink text="Home" link="" />
              <HeaderLink text="About" link="about" />
              <HeaderLink text="Portfolio" link="portfolio" />
              <HeaderLink text="Contact" link="contact" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
