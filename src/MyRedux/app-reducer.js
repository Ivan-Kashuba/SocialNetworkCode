import { getAuthUserDataThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const InitializedSucces = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThunk());
  Promise.all([promise]).then(() => {
    dispatch(InitializedSucces());
  });
};

export default appReducer;
