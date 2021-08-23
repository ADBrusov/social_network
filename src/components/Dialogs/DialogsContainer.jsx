import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsPageReducer';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => ({state: state.dialogsPage});
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    sendMessage: () => dispatch(sendMessageActionCreator()),
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;