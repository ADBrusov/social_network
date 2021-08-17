const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: "Hello, this is first post", likesCount: 15 },
        { id: 2, message: "This is second post. Yo", likesCount: 20 },
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Alexander" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Nikita" },
        { id: 4, name: "Krus" },
        { id: 5, name: "Nikolay" },
        { id: 6, name: "Evgenii" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "LOL" },
      ],
      newMessageText: '',
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
  },
};

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewMessageTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default store;