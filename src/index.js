import store from "./MyRedux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const RerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
RerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  RerenderEntireTree(state);
});
