import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData, newPostText, addPost, updateNewPostText }) => {
  const posts = postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  const createPost = () => {
    addPost();
  };

  const onPostChange = (event) => {
    let text = event.target.value;
    updateNewPostText(text);
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
