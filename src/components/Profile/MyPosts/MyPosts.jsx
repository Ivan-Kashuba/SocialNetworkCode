import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    { id: 1, message: "Hi, how are u?" },
    { id: 2, message: "It is my first post" },
  ];
  return (
    <>
      <div className={style.posts__block}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea />
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={style.posts}>
          {postData.map((elem) => {
            return <Post message={elem.message} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
