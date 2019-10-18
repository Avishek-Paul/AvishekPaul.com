import React, { Component } from "react";
import posed from "react-pose";
import { Link } from "react-scroll";

const Rect = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  press: {
    scale: 1.1
  }
});

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.buttonStyle = {
      width: this.props.width,
      height: this.props.height
    };
  }

  render() {
    return (
      // <a href={this.props.link}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <Rect className="CustomButton" style={this.buttonStyle}>
          {this.props.text}
        </Rect>
      </Link>
    );
  }
}

export default CustomButton;
