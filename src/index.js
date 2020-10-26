import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
