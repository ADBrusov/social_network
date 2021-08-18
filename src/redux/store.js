import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hello, this is first post", likesCount: 15},
        {id: 2, message: "This is second post. Yo", likesCount: 20},
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: "Alexander"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Nikita"},
        {id: 4, name: "Krus"},
        {id: 5, name: "Nikolay"},
        {id: 6, name: "Evgenii"},
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "LOL"},
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
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;