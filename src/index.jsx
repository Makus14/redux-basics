import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import store from "./store/index.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
