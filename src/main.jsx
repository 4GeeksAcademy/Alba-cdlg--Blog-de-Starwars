import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/custom.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom";

console.log("App iniciando");

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

console.log("🚀 App iniciando");
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Main />);

