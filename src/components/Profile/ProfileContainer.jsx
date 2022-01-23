import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router";
import {
  getUserProfileThunk,
  getStatusThunk,
  updateStatusThunk,
} from "../../MyRedux/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk,
    getStatusThunk,
    updateStatusThunk,
  }),
  withRouter
)(ProfileContainer);
