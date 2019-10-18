import React, { Component } from "react";
import { AboutImageSlide } from "./AboutImageSlide";

export class About extends Component {
  render() {
    return (
      <div id="about">
        <br />
        <h1>About</h1>
        <br />
        <AboutImageSlide />
      </div>
    );
  }
}

export default About;
