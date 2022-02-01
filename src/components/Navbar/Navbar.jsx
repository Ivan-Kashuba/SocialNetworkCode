import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import user from "../../assets/img/user.png";
import setting from "../../assets/img/setting.png";
import news from "../../assets/img/news.png";
import message from "../../assets/img/message.png";
import profile from "../../assets/img/profile.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.items}>
        <NavLink
          to="/profile"
          className={(isActive) => (isActive ? styles.activeItem : styles.item)}
        >
          <div className={styles.itemArea}>
            Profile{" "}
            <img className={styles.smallIcon} src={profile} alt="profile" />
          </div>
        </NavLink>
      </div>
      <div className={styles.items}>
        <NavLink
          to="/dialogs"
          className={(isActive) => (isActive ? styles.activeItem : styles.item)}
        >
          <div className={styles.itemArea}>
            Messages
            <img className={styles.smallIcon} src={message} alt="message" />
          </div>
        </NavLink>
      </div>
      <div className={styles.items}>
        <NavLink
          className={(isActive) => (isActive ? styles.activeItem : styles.item)}
          to="/news"
        >
          <div className={styles.itemArea}>
            News <img className={styles.smallIcon} src={news} alt="news" />
          </div>
        </NavLink>
      </div>
      <div className={styles.items}>
        <NavLink
          className={(isActive) => (isActive ? styles.activeItem : styles.item)}
          to="/users"
        >
          <div className={styles.itemArea}>
            Users <img className={styles.smallIcon} src={user} alt="user" />
          </div>
        </NavLink>
      </div>
      <div className={styles.items}>
        <NavLink
          className={(isActive) => (isActive ? styles.activeItem : styles.item)}
          to="/settings"
        >
          <div className={styles.itemArea}>
            Settings
            <img className={styles.smallIcon} src={setting} alt="settings" />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
