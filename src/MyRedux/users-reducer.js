const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Ivan",
      status: "I am a FrontEnd developer",
      location: { city: "Uzhhorod", country: "Ukraine" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Sasha",
      status: "I am a callCenter boss",
      location: { city: "Uzhhorod", country: "Lviv" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Ilya",
      status: "I am a fulStack dev",
      location: { city: "Uzhhorod", country: "Kyiv" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, folowed: true };
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, folowed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });

export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });

export const setUsersActionCreator = () => ({
  type: SET_USERS,
});

export default usersReducer;
