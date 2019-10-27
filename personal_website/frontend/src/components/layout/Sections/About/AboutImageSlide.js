import React, { Component } from "react";

export class AboutImageSlide extends Component {
  render() {
    return (
      <div className="AboutImageRow">
        <img
          className="AboutImage"
          alt="Xandr Logo"
          src="static/images/about/xandr_about.jpg"
        />
        <img
          className="AboutImage"
          alt="Binghamton University Logo"
          src="static/images/about/binghamton_about.jpg"
        />
        <img
          className="AboutImage"
          alt="Generic Code"
          src="static/images/about/generic_code.png"
        />
        <p className="AboutImageCaption">
          I work as a <strong>Services Rotational Associate</strong> at{" "}
          <strong>Xandr</strong>. My Current title is{" "}
          <strong>Product Support Specialist</strong>
        </p>
        <p className="AboutImageCaption">
          I graduated from <strong>Binghamton University</strong> with a{" "}
          <i>BS</i> in <strong>Computer Engineering</strong>.
        </p>
        <p className="AboutImageCaption">
          I'm a very <strong>analytical</strong> person. I love working with{" "}
          <strong>numbers</strong> and <strong>code</strong>.
        </p>
      </div>
    );
  }
}

export default AboutImageSlide;
