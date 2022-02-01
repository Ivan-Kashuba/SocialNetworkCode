const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Jenya" },
    { id: 2, name: "Nastya" },
    { id: 3, name: "Yonchi" },
    { id: 4, name: "Anya" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Sofa" },
  ],

  messagesData: [
    { id: 1, message: "Hey, whats app?" },
    { id: 2, message: "It was amazing story 5 minutes ago" },
    { id: 3, message: "I have protect my diploma, it was close ^_^" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, message: text },
        ],
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
