import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import { animateScroll as scroll } from "react-scroll";

import Header from "./layout/Navbar/Header";
import Canvas from "./layout/Canvas/Canvas";

import About from "./layout/Sections/About";
import Portfolio from "./layout/Sections/Portfolio";
import Contact from "./layout/Sections/Contact";

class App extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Fragment>
        <Canvas />
        <Header />
        <div className="sections">
          <Container>
            <About />
          </Container>
          <Container>
            <Portfolio />
          </Container>
          <Container>
            <Contact />
          </Container>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
