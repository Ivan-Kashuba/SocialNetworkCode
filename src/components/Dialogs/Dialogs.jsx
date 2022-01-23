import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { TextArea } from "../common/FormControls/FormsControls";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const maxLength50 = maxLengthCreator(50);

const Dialogs = ({ state, onCreateMessage }) => {
  const dialogs = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  const messages = state.messagesData.map((mess) => (
    <Message messageText={mess.message} key={mess.id} />
  ));

  let addNewMessage = (values) => {
    onCreateMessage(values.newMessageText);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogs}</div>
      <div className={styles.messages}>
        {messages}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        validate={[required, maxLength50]}
        name="newMessageText"
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "DialogAddMessageForm" })(
  AddMessageForm
);
