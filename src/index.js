import React from "react";
import ReactDOM from "react-dom/client";

//importing Provider and store to use redux
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wrapping App in order to use redux
  <Provider store={store}>
    <App />
  </Provider>
);
