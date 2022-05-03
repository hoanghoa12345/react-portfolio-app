import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./index.scss";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
