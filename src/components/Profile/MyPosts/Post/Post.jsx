import styles from './Post.module.css'


const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
        width="40"
        height="40"
        alt="avatar">
      </img>
      <span>{props.message}</span>
      <div>
        <button>Like</button>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
}


export default Post;