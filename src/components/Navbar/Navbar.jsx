import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.itemm}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? styles.activeItem : styles.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.activeItem : styles.item
          }
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.activeItem : styles.item
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.activeItem : styles.item
          }
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.activeItem : styles.item
          }
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
