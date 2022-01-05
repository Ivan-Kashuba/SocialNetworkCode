import React from "react";
import styles from "./../Dialogs.module.css";
const Message = ({ messageText }) => {
  return <div className={styles.message}>{messageText}</div>;
};

export default Message;
