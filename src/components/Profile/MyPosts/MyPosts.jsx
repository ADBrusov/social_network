import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostTextElement = React.createRef();

  let onNewPostTextChange = () => {
    let text = newPostTextElement.current.value;
    props.updateNewPostText(text);
  };

  let onAddPostClick = () => {
    props.addPost();
  };

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <div>
        <textarea placeholder="What's new?"
                  ref={newPostTextElement}
                  onChange={onNewPostTextChange}
                  value={props.newPostText}/>
        <button className={styles.buttonSend} onClick={onAddPostClick}>Post</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
}


export default MyPosts;