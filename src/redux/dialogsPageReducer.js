const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    case SEND_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    }
    default:
      return state;
  }
};


export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsPageReducer;