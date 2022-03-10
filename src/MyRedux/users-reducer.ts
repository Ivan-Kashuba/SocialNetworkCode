import { userAPI } from "../Api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isfollowingInProgress: [] as Array<number>, //array of usersId
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
type FollowActionCreatorType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followActionCreator = (
  userId: number
): FollowActionCreatorType => ({
  type: FOLLOW,
  userId,
});
type UnfollowActionCreatorType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowActionCreator = (
  userId: number
): UnfollowActionCreatorType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionCreatorType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export const setUsersActionCreator = (
  users: Array<UserType>
): SetUsersActionCreatorType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionCreatorType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPageActionCreator = (
  currentPage: number
): SetCurrentPageActionCreatorType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionCreatorType = {
  type: typeof SET_TOTAL_USERS;
  totalUsersCount: number;
};

export const setTotalUsersCountActionCreator = (
  totalUsersCount: number
): SetTotalUsersCountActionCreatorType => ({
  type: SET_TOTAL_USERS,
  totalUsersCount,
});

type ToggleIsFetchingActionCreatorType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetchingActionCreator = (
  isFetching: boolean
): ToggleIsFetchingActionCreatorType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type FollowingInProgressActionCreatorType = {
  type: typeof FOLLOWING_IN_PROGRESS;
  isfollowingInProgress: boolean;
  userId: number;
};
export const followingInProgressActionCreator = (
  isfollowingInProgress: boolean,
  userId: number
): FollowingInProgressActionCreatorType => ({
  type: FOLLOWING_IN_PROGRESS,
  isfollowingInProgress,
  userId,
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetchingActionCreator(true));

    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(data.items));
    dispatch(setTotalUsersCountActionCreator(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(followingInProgressActionCreator(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(followingInProgressActionCreator(false, userId));
};

export const followThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    let actionCreator = followActionCreator;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export const unFollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollowActionCreator;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default usersReducer;
