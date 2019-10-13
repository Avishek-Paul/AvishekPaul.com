import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";

export class HeaderLink extends Component {
  topTop() {
    scroll.scrollToTop();
  }

  render() {
    if (!this.props.link) {
      console.log("empty link");
    }

    return (
      <Link
        className="HeaderLink"
        activeClass="active"
        to={this.props.link}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <Nav.Link className="navbar-link">{this.props.text}</Nav.Link>
      </Link>
    );
  }
}

export default HeaderLink;
