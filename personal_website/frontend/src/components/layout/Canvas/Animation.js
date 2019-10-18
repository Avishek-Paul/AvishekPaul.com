import React, { Component } from "react";
import Particles from "react-particles-js";

export class Animation extends Component {
  render() {
    return (
      <Particles
        className="animation"
        params={{
          particles: {
            number: {
              value: 180,
              density: {
                enable: false
              }
            },
            size: {
              value: 9,
              random: true
            },
            move: {
              direction: "right",
              out_mode: "out"
            },
            line_linked: {
              enable: false
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 15
              }
            }
          }
        }}
      />
    );
  }
}

export default Animation;
