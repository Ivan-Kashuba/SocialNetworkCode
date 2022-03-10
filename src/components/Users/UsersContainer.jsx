import React from "react";
import { connect } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageActionCreator,
  unFollowThunkCreator,
} from "../../MyRedux/users-reducer.ts";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
  getCurrentPage,
  getIsFetching,
  getIsfollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../MyRedux/user-selector";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          togglefollowingInProgress={this.props.togglefollowingInProgress}
          isfollowingInProgress={this.props.isfollowingInProgress}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isfollowingInProgress: state.usersPage.isfollowingInProgress,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isfollowingInProgress: getIsfollowingInProgress(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followThunk: (userID) => {
      dispatch(followThunkCreator(userID));
    },
    unfollowThunk: (userID) => {
      dispatch(unFollowThunkCreator(userID));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    getUsersThunk: (currentPage, pageSize) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
