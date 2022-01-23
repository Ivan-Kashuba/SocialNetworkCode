import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { initializeApp } from "./MyRedux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
