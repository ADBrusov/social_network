const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
  posts: [
    {id: 1, message: "Hello, this is first post", likesCount: 15},
    {id: 2, message: "This is second post. Yo", likesCount: 20},
  ],
  newPostText: '',
};

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      break;
    default:
      break;
  }
  return state;
}


export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default profilePageReducer;