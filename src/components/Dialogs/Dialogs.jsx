import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../MyRedux/dialogs-reducer";

const Dialogs = ({ state, dispatch }) => {
  const onMessageChange = (event) => {
    let text = event.target.value;
    let action = updateNewMessageTextActionCreator(text);
    dispatch(action);
  };

  const createMessage = () => {
    let action = addMessageActionCreator();
    dispatch(action);
  };

  const dialogs = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} urlNumber={dialog.urlNumber} />
  ));

  const messages = state.messagesData.map((mess) => (
    <Message messageText={mess.message} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogs}</div>
      <div className={styles.messages}>
        {messages}
        <textarea value={state.newMessageText} onChange={onMessageChange} />
        <div>
          <button onClick={createMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
