import { connect } from "react-redux";
import { reset } from "redux-form";
import { addPostActionCreator } from "../../../MyRedux/profile-reducer.ts";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    clearPost: () => {
      dispatch(reset("profileAddNewPostForm"));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
