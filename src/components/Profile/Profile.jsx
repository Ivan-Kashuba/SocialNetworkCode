import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

const Profile = ({ state, dispatch }) => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts
          postData={state.postData}
          dispatch={dispatch}
          newPostText={state.newPostText}
        />
      </div>
    </>
  );
};

export default Profile;
