import { connect } from "react-redux";
import { compose } from "redux";
import { withAutRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../MyRedux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onCreateMessage: (newMessageText) => {
      let action = addMessageActionCreator(newMessageText);
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAutRedirect
)(Dialogs);
