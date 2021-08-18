import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let onNewPostTextChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  let onAddPostClick = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (<MyPosts updateNewPostText={onNewPostTextChange}
                   addPost={onAddPostClick}
                   posts={props.store.getState().profilePage.posts}
                   newPostText={props.store.getState().profilePage.newPostText}/>
  );
}


export default MyPostsContainer;