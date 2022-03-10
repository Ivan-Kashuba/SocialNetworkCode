import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import usersReducer from "./users-reducer.ts";
import AutReducer from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: AutReducer,
  form: formReducer,
  app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
