import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

import "./index.scss";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
