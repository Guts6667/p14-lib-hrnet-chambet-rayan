import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Modal title={"Hllo"} description={"Hello hello"} buttonText={"x"} />
  </React.StrictMode>
);
