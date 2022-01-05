import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef } from "react";

const MyPosts = ({ postData, addPost, newPostText, UpdateNewPostText }) => {
  const posts = postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  const newPostElement = useRef();

  const createPost = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    UpdateNewPostText(text);
  };

  return (
    <>
      <div className={style.posts__block}>
        <h3>My posts</h3>

        <div>
          <div>
            <textarea
              ref={newPostElement}
              onChange={onPostChange}
              value={newPostText}
            />
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
