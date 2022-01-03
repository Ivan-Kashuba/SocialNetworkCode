import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = ({ name, urlNumber }) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={"/dialogs/" + urlNumber}>{name}</NavLink>
    </div>
  );
};

const Message = ({ messageText }) => {
  return <div className={styles.message}>{messageText}</div>;
};

const Dialogs = () => {
  const dialogsData = [
    { urlNumber: 1, name: "Vantus" },
    { urlNumber: 2, name: "Valera" },
    { urlNumber: 3, name: "Yonchi" },
    { urlNumber: 4, name: "Anya" },
    { urlNumber: 5, name: "Lubov" },
    { urlNumber: 6, name: "Sofa" },
  ];

  const messagesData = [
    { id: 1, message: "Hey" },
    { id: 2, message: "AbobusKamamoi" },
    { id: 3, message: "Are u to4no FrontEnder?" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsData.map((elem) => {
          return <DialogItem name={elem.name} urlNumber={elem.urlNumber} />;
        })}
      </div>
      <div className={styles.messages}>
        {messagesData.map((elem) => {
          return <Message messageText={elem.message} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
