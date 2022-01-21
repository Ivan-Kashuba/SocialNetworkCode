import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ state, onMessageChange, onCreateMessage, isAuth }) => {
  const dialogs = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  const messages = state.messagesData.map((mess) => (
    <Message messageText={mess.message} key={mess.id} />
  ));

  const MessageChange = (event) => {
    let text = event.target.value;
    onMessageChange(text);
  };

  const createMessage = () => {
    onCreateMessage();
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogs}</div>
      <div className={styles.messages}>
        {messages}
        <textarea value={state.newMessageText} onChange={MessageChange} />
        <div>
          <button onClick={createMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
