import { ADD_CHAT, DELETE_CHAT } from './actions';

const initialChatList = [];

  export const chatsReducer = (state = initialChatList, action) => {
    switch(action.type){
        case ADD_CHAT:
            return [...state, action.payload];
        case DELETE_CHAT:
            return state.filter(({id}) => id !== action.payload.chatId);
        default:
            return state;
    }
  }