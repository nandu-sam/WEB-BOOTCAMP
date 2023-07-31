import React from "react";
import ReactDOM from "react-dom/client";
//stateless functional component
import GreetingForm from "./GreetingForm";

const root = ReactDOM.createRoot(document.getElementById("root")); //method create root method in react

root.render(
  <React.StrictMode>
    <GreetingForm />
  </React.StrictMode> //this is a developer mode
);
