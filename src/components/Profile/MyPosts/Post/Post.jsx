import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <img
        className={style.postImage}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycH9-IJcnOZbAkkoJwC5VDKpq8NWqV7NJ2A&usqp=CAU"
        alt="icon"
      />
      post 2
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
