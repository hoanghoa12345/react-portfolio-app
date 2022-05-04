import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

import "./index.scss";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
