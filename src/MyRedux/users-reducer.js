import { userAPI } from "../Api/api";
import { updateObjectInArray } from "../utils/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
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
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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
  return async (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));

    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(data.items));
    dispatch(setTotalUsersCountActionCreator(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(followingInProgressActionCreator(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(followingInProgressActionCreator(false, userId));
};

export const followThunkCreator = (userId) => {
  return async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    let actionCreator = followActionCreator;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export const unFollowThunkCreator = (userId) => {
  return async (dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollowActionCreator;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default usersReducer;
