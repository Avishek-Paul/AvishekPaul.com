import React, { Component } from "react";
import posed from "react-pose";

const Rect = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
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
      <a href={this.props.link}>
        <Rect className="CustomButton" style={this.buttonStyle}>
          {this.props.text}
        </Rect>
      </a>
    );
  }
}

export default CustomButton;
