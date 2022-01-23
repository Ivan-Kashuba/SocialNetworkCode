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
    case ADD_MESSAGE: {
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 4, message: text }],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});
export default dialogsReducer;
