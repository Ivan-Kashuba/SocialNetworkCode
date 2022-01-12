import { connect } from "react-redux";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../MyRedux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    onCreateMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
