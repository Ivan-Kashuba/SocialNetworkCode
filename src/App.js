import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app__wrapper__content">
        <Switch>
          <Route path="/dialogs">
            <DialogsContainer />
          </Route>
          <Route path="/profile/:userId?">
            <ProfileContainer />
          </Route>
          <Route path="/users">
            <UsersContainer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
