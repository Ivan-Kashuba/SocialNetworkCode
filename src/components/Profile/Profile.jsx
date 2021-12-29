import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={style.content}>
        <div>
          <img
			 className={style.contentImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQmuasfK1qjFkjJL-4h21Yps4e3i0fpHBBQ&usqp=CAU"
            alt="img"
          />
        </div>
        <div> ava+ descr</div>
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
