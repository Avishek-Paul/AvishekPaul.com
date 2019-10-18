import React, { Component, Fragment } from "react";
import { CustomButton } from "./CustomButton";

export class CanvasText extends Component {
  render() {
    return (
      <Fragment>
        <div className="CanvasTextContainer">
          <div className="CanvasText">
            <p>
              Hello, I'm <span id="highlight">Avishek Paul</span>.<br></br> I
              write code and build stuff sometimes.
            </p>
          </div>
        </div>
        <div className="ButtonContainer">
          <CustomButton
            width="200px"
            height="50px"
            link="#home"
            text="Learn More About Me"
          />
        </div>
      </Fragment>
    );
  }
}

export default CanvasText;
