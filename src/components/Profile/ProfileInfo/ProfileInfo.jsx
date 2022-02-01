import React, { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import styles from "./ProfileInfo.module.css";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div>
      <div className={styles.description__block}>
        <div className={styles.account}>
          <div className={styles.acountImage}>
            <img
              src={
                props.profile.photos.large ||
                "https://html5css.ru/howto/img_avatar.png"
              }
              alt=""
              className={styles.profileAvatar}
            />
            {props.isOwner && (
              <input type="file" onChange={onMainPhotoSelected} />
            )}
          </div>
          <div className={styles.account__info}>
            <div className={styles.mainInfo}>
              <div className={styles.fullName}> {props.profile.fullName} </div>
              <ProfileStatuswithHooks
                status={props.status}
                updateStatusThunk={props.updateStatusThunk}
              />
            </div>
            {editMode ? (
              <ProfileDataForm
                initialValues={props.profile}
                onSubmit={onSubmit}
                profile={props.profile}
              />
            ) : (
              <ProfileData
                profile={props.profile}
                isOwner={props.isOwner}
                activateEditMode={activateEditMode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
