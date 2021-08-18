import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsPageReducer';
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let onNewMessageTextChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  return (<Dialogs updateNewMessageText={onNewMessageTextChange}
                   sendMessage={onSendMessageClick}
                   state={props.store.getState().dialogsPage}/>
  );
}


export default DialogsContainer;