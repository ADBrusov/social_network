import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPageState.dialogs
    .map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

  let messagesElements = props.dialogsPageState.messages
    .map(message => <Message message={message.message} />);

  let newMessageTextElement = React.createRef();

  let onNewMessageTextChange = () => {
    let text = newMessageTextElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div>
      <div className={styles.dialogsWrapper}>
        <ul className={styles.dialogsList}>
          {dialogsElements}
        </ul>
        <ul className={styles.messagesList}>
          {messagesElements}
        </ul>
        <div>
          <textarea
            placeholder='Write a message...'
            ref={newMessageTextElement}
            onChange={onNewMessageTextChange}
            value={props.dialogsPageState.newMessageText}
          />
          <button className={styles.buttonSend} onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;