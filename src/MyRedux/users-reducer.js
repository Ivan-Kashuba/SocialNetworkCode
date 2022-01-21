import { userAPI } from "../Api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isfollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        isfollowingInProgress: action.isfollowingInProgress
          ? [...state.isfollowingInProgress, action.userId]
          : state.isfollowingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS,
  totalUsersCount,
});
export const toggleIsFetchingActionCreator = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const followingInProgressActionCreator = (
  isfollowingInProgress,
  userId
) => ({
  type: FOLLOWING_IN_PROGRESS,
  isfollowingInProgress,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));

    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetchingActionCreator(false));
      dispatch(setUsersActionCreator(data.items));
      dispatch(setTotalUsersCountActionCreator(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressActionCreator(true, userId));
    userAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
      dispatch(followingInProgressActionCreator(false, userId));
    });
  };
};

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressActionCreator(true, userId));
    userAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
      }
      dispatch(followingInProgressActionCreator(false, userId));
    });
  };
};

export default usersReducer;
