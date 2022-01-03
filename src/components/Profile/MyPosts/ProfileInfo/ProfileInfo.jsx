import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.contentImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQmuasfK1qjFkjJL-4h21Yps4e3i0fpHBBQ&usqp=CAU"
          alt="img"
        />
      </div>
      <div className={styles.description__block}> ava+ descr</div>
    </div>
  );
};

export default ProfileInfo;
