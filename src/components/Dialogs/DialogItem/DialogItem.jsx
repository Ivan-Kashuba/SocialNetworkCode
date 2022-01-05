import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = ({ name, urlNumber }) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink
        to={"/dialogs/" + urlNumber}
        className={(dialog) =>
          dialog.isActive ? styles.active : styles.dialog
        }
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
