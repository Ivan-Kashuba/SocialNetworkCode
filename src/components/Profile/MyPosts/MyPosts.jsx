import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../MyRedux/profile-reducer";

const MyPosts = ({ postData, dispatch, newPostText }) => {
  const posts = postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  const createPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = (event) => {
    let text = event.target.value;
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  return (
    <>
      <div className={style.posts__block}>
        <h3>My posts</h3>

        <div>
          <div>
            <textarea onChange={onPostChange} value={newPostText} />
          </div>
          <div>
            <button onClick={createPost}>Add post</button>
          </div>
        </div>
        <div className={style.posts}>{posts}</div>
      </div>
    </>
  );
};

export default MyPosts;
