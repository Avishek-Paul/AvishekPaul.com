import React, { Component } from "react";

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
        <div className="CustomButton" style={this.buttonStyle}>
          <p className="CustomButtonText">{this.props.text}</p>
        </div>
      </a>
    );
  }
}

export default CustomButton;
