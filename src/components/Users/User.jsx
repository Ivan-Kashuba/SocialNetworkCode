import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Users.module.css";

const User = ({ user, isfollowingInProgress, followThunk, unfollowThunk }) => {
  return (
    <div>
      <div key={user.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + user.id}>
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
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
