import React from "react";
import ReactDOM from "react-dom/client";
//stateless functional component
import MultipleReturn from "./MultipleReturn.js";

const root = ReactDOM.createRoot(document.getElementById("root")); //method create root method in react

root.render(
  <React.StrictMode>
    <MultipleReturn />
  </React.StrictMode> //this is a developer mode
);
