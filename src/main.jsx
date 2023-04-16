import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (import.meta.env.DEV) {
  import("./mocks/browser")
    .then(({ worker }) => worker.start())
    .then(() => {
      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    });
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
