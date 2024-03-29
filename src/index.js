import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
  <Provider configureStore={configureStore}>
  <App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);