import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Lorem from "./layout/Lorem";
import Canvas from "./layout/Canvas";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Canvas />
        <Header />
        <Lorem name="about" />
        <Lorem name="portfolio" />
        <Lorem name="contact" />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
