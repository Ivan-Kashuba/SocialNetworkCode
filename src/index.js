import store from "./MyRedux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min"; // only for github

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
