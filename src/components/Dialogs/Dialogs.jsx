import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ state }) => {
  const dialogs = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} urlNumber={dialog.urlNumber} />
  ));

  const messages = state.messagesData.map((mess) => (
    <Message messageText={mess.message} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogs}</div>
      <div className={styles.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
