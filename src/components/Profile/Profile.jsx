import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </>
  );
};

export default Profile;
