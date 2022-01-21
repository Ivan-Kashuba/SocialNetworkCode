import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = ({ name, id }) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink
        to={"/dialogs/" + id}
        className={(isActive) => (isActive ? styles.active : styles.dialog)}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
