import React from "react";
import Preloader from "../common/preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "../Profile/ProfileInfo/ProfileInfo.module.css";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatusThunk={props.updateStatusThunk}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
