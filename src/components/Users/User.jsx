import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Users.module.css";

const User = ({ user, isfollowingInProgress, followThunk, unfollowThunk }) => {
  return (
    <div className={styles.user}>
      <div key={user.id}>
        <span>
          <div>
            <NavLink className={styles.followButton} to={"/profile/" + user.id}>
              <img
                className={styles.avatarUser}
                src={
                  user.photos.small
                    ? user.photos.small
                    : "https://html5css.ru/howto/img_avatar.png"
                }
                alt="img"
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={isfollowingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollowThunk(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={isfollowingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  followThunk(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>

        <span>
          <span>
            <div>
              <b>{user.name}</b>
            </div>
            <div>{user.status || <div>No status</div>}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
