import React, { Component } from "react";

import { CanvasText } from "./CanvasText";
import { Animation } from "./Animation";

export class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
        <Animation />
        <CanvasText />
      </div>
    );
  }
}

export default Canvas;
