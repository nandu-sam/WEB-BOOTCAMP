import React from "react";
import ReactDOM from "react-dom/client";
//stateless functional component

function Greeting() {
  return React.createElement("h2", {}, "hii there");
}

const root = ReactDOM.createRoot(document.getElementById("root")); //method create root method in react

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode> //this is a developer mode
);
