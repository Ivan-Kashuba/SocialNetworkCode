import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app__wrapper">
      <Header />
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
