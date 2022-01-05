import state, { subscribe } from "./MyRedux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./MyRedux/state";
import { UpdateNewPostText } from "./MyRedux/state";

const RerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        UpdateNewPostText={UpdateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
RerenderEntireTree(state);

subscribe(RerenderEntireTree);
