import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

const Profile = ({ state, addPost, UpdateNewPostText }) => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts
          postData={state.postData}
          addPost={addPost}
          newPostText={state.newPostText}
          UpdateNewPostText={UpdateNewPostText}
        />
      </div>
    </>
  );
};

export default Profile;
