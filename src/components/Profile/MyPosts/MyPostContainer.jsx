import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilePageReducer';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);