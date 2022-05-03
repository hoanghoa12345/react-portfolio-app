import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./index.scss";

const App = () => (
  <div>
    <Navbar />
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
