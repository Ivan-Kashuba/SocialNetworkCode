import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { urlNumber: 1, name: "Vantus" },
        { urlNumber: 2, name: "Valera" },
        { urlNumber: 3, name: "Yonchi" },
        { urlNumber: 4, name: "Anya" },
        { urlNumber: 5, name: "Lubov" },
        { urlNumber: 6, name: "Sofa" },
      ],

      messagesData: [
        { id: 1, message: "Hey" },
        { id: 2, message: "AbobusKamamoi" },
        { id: 3, message: "Are u to4no FrontEnder?" },
      ],
      newMessageText: "",
    },

    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are u?", likeCount: 3 },
        { id: 2, message: "It is my first post", likeCount: 154 },
      ],
      newPostText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
