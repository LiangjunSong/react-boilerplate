import App from "./app";
import ReactDOM from "react-dom";
import React from "react";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;