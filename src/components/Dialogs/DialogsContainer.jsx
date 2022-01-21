import { connect } from "react-redux";
import { compose } from "redux";
import { withAutRedirect } from "../../hoc/withAuthRedirect";
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAutRedirect
)(Dialogs);
