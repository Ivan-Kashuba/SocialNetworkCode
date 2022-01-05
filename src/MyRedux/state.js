let RerenderEntireTree = () => {
  console.log("state changed");
};
const state = {
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
  },

  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are u?", likeCount: 3 },
      { id: 2, message: "It is my first post", likeCount: 154 },
    ],
    newPostText: "Yonchi the best",
  },
};

export const addPost = (state) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };

  state.profilePage.postData.unshift(newPost);
  state.profilePage.newPostText = "";
  RerenderEntireTree(state);
};

export const UpdateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  RerenderEntireTree(state);
};

export const subscribe = (observer) => {
  RerenderEntireTree = observer;
};

export default state;
