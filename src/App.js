import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { initializeApp } from "./MyRedux/app-reducer.ts";
import Preloader from "./components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const NotFoundError = React.lazy(() =>
  import("./components/404/NotFoundError")
);

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
            <Route exact path="/">
              <Redirect from="/" to="/profile" />
            </Route>
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
            <Route path="*">{withSuspense(NotFoundError)}</Route>
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
