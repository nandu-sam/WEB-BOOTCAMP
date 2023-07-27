import React from "react";
import ReactDOM from "react-dom/client";
//stateless functional component
import BookList from "./BookList";

const root = ReactDOM.createRoot(document.getElementById("root")); //method create root method in react

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode> //this is a developer mode
);
