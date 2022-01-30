import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../Api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET__CAPTCHA__URL__SUCCESS = "GET__CAPTCHA__URL__SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const AutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    case GET__CAPTCHA__URL__SUCCESS: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET__CAPTCHA__URL__SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserDataThunk = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunk());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      debugger;
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      let action = stopSubmit("login", { _error: message });
      dispatch(action);
    }
  };

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default AutReducer;
