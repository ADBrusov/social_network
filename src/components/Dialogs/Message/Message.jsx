import styles from './Message.module.css';


const Message = (props) => {
    return (
      <li className={styles.messageItem}>{props.message}</li>
    );
  }


export default Message;