import { getAuthUserDataThunk } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccesActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const InitializedSucces = (): InitializedSuccesActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserDataThunk());
  Promise.all([promise]).then(() => {
    dispatch(InitializedSucces());
  });
};

export default appReducer;
