import { PostType, ProfileType, PhotosType } from "./../types/types";
import { stopSubmit } from "redux-form";
import { profileAPI } from "../Api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE__PHOTO__SUCCESS = "SAVE__PHOTO__SUCCESS";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are u?", likeCount: 3 },
    { id: 2, message: "It is my first post", likeCount: 154 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length + 1,
        message: action.newPostText,
        likeCount: 0,
      };
      let stateCopy = {
        ...state,
        postData: [newPost, ...state.postData],
        newPostText: " ",
      };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE__PHOTO__SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};
type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});
type SavePhotoSuccessType = {
  type: typeof SAVE__PHOTO__SUCCESS;
  photos: PhotosType;
};
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE__PHOTO__SUCCESS,
  photos,
});

export const getUserProfileThunk =
  (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };

export const getStatusThunk = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfileThunk(userId));
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      let action = stopSubmit("edit-profile", { _error: message });
      dispatch(action);
      return Promise.reject(message);
    }
  };

export default profileReducer;
