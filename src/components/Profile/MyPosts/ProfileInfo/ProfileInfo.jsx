import React from "react";
import Preloader from "../../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };
  return (
    <div>
      <div>
        <img
          className={styles.contentImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQmuasfK1qjFkjJL-4h21Yps4e3i0fpHBBQ&usqp=CAU"
          alt="img"
        />
      </div>
      <div className={styles.description__block}>
        <img
          src={
            props.profile.photos.large ||
            "https://html5css.ru/howto/img_avatar.png"
          }
          alt=""
          className={styles.profileAvatar}
        />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatuswithHooks
          status={props.status}
          updateStatusThunk={props.updateStatusThunk}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
