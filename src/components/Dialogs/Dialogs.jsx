import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs
    .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

  let messagesElements = props.state.messages
    .map(message => <Message message={message.message}/>);

  let newMessageTextElement = React.createRef();

  let onNewMessageTextChange = () => {
    let text = newMessageTextElement.current.value;
    props.updateNewMessageText(text)
  };

  let onSendMessageClick = () => {
    props.sendMessage();
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
        <div className={styles.newMessageWrapper}>
          <textarea
            placeholder='Write a message...'
            ref={newMessageTextElement}
            onChange={onNewMessageTextChange}
            value={props.state.newMessageText}
          />
          <button className={styles.newMessageButton} onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}


export default Dialogs;