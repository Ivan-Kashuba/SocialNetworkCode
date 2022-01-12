const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Vantus" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Yonchi" },
    { id: 4, name: "Anya" },
    { id: 5, name: "Lubov" },
    { id: 6, name: "Sofa" },
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
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    case ADD_MESSAGE: {
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 4, message: text }],
      };
    }
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
