import React from "react";
import ReactDOM from "react-dom/client";
//stateless functional component
import Example from "./Example.js";

const root = ReactDOM.createRoot(document.getElementById("root")); //method create root method in react

root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode> //this is a developer mode
);
