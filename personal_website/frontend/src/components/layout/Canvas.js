import React, { Component } from "react";
import posed from "react-pose";

import { CanvasText } from "./CanvasText";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const boxStyle = {
  width: "100px",
  height: "100px",
  background: "#ff1c69"
};

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    return (
      <div className="Canvas">
        <CanvasText />
      </div>
    );
  }
}

export default Canvas;
