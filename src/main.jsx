import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./firebase"; // Import Firebase (initialize here or use the database export)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);