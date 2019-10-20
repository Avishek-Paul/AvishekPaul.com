import React, { Component } from "react";
import { Link } from "react-scroll";

export class HeaderLink extends Component {
  static defaultProps = {
    offset: -50
  };

  render() {
    return (
      <Link
        className="HeaderLink"
        activeClass="active"
        to={this.props.link}
        spy={false}
        smooth={true}
        offset={this.props.offset}
        duration={500}
      >
        <a href="">{this.props.text}</a>
      </Link>
    );
  }
}

export default HeaderLink;
