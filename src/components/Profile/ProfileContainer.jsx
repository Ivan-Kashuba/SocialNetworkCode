import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router";
import {
  getUserProfileThunk,
  getStatusThunk,
  updateStatusThunk,
  savePhoto,
  saveProfile,
} from "../../MyRedux/profile-reducer.ts";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  };

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
          isOwner={!this.props.match.params.userId}
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
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
