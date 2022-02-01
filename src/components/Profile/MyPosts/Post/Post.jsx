import React from "react";
import style from "./Post.module.css";

const Post = ({ message, likeCount, icon, id }) => {
  return (
    <div className={style.item}>
      <div key={id}>
        {icon ? (
          <img className={style.postImage} src={icon} alt="icon" />
        ) : (
          <img
            className={style.postImage}
            src="https://html5css.ru/howto/img_avatar.png"
            alt="icon"
          />
        )}
        {message}
        <div>
          <span>like: {likeCount} </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
