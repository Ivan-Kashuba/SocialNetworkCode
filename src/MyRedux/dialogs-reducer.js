const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export default dialogsReducer;
