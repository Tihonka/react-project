import { ADD_CHAT, DELETE_CHAT } from '../chats/actions';
import { ADD_MESSAGE, DELETE_MESSAGE } from './actions';

const initialMessages = {};

  export const messagesReducer = (state = initialMessages, {type, payload}) => {
    switch(type){
        case ADD_MESSAGE:
            return {...state,
                [payload.chatId]: [...state[payload.chatId], payload.newMessage]};
        case ADD_CHAT:
            return {
              ...state,
              [payload.id]: []
            };
        case DELETE_MESSAGE: {
            const newMessages = {...state};
            newMessages[payload.chatId] = newMessages[payload.chatId].filter(({ id }) => id !== payload.idToDelete);
              return newMessages;
        };
        case DELETE_CHAT: {
                const newMessages = {...state};
                delete newMessages[payload.chatId];
                return newMessages;
            };
        default:
            return state;
    }
  }