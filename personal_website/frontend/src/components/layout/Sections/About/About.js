import React, { Component } from "react";
import { AboutImageSlide } from "./AboutImageSlide";
import { AboutTimeline } from "./AboutTimeline";

export class About extends Component {
  render() {
    return (
      <div id="about">
        <br />
        <h1>About</h1>
        <br />
        <AboutImageSlide />
        <AboutTimeline />
      </div>
    );
  }
}

export default About;
