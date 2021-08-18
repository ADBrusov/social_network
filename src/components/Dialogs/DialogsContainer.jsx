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
                   dialogs={props.store.getState().dialogsPage.dialogs}
                   messages={props.store.getState().dialogsPage.messages}
                   newMessageText={props.store.getState().dialogsPage.newMessageText}/>
  );
}


export default DialogsContainer;