import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
