import { onValue, set } from 'firebase/database';
import { chatsRef, getChatMesRefById, getChatRefById } from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const SET_CHATS = 'CHATS::SET_CHATS';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: {
      chatId: id,
    }
  });

export const setChats = (chats) =>({
  type: SET_CHATS,
  payload: chats,
});

export const addChatsWithFB = (newChat) => (dispatch) =>{
  set(getChatRefById(newChat.id), newChat);
  set(getChatMesRefById(newChat.id), { empty: true });
};

export const DeleteChatsWithFB = (chatId) => (dispatch) =>{
  set(getChatRefById(chatId), null);
  set(getChatMesRefById(chatId), null);
};

  export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnap) =>{
      const newChats = [];
      chatsSnap.forEach((snapshot) =>{
        newChats.push(snapshot.val());
      })
      dispatch(setChats(newChats));
    });
  };