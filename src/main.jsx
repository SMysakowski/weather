import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Card, { CARD_VARIANTS } from "./components/card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
