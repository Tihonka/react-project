import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from './actions';

const initialChatList = [];

  export const chatsReducer = (state = initialChatList, { type, payload }) => {
    switch(type){
        case ADD_CHAT:
            return [...state, payload];
        case DELETE_CHAT:
            return state.filter(({id}) => id !== payload.chatId);
        case SET_CHATS:
            return payload;
        default:
            return state;
    }
  }