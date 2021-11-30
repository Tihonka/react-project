import { AUTHORS } from '../../utils/constants';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (chatId, newMessage) => ({
  type: ADD_MESSAGE,
  payload: {chatId, newMessage},
});

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {chatId, idToDelete},
  });

  let timeout;

  export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessage(chatId, newMessage));

    if (newMessage.author !== AUTHORS.robot) {
        if(timeout) {
            clearTimeout(timeout);
        };
       timeout = setTimeout(() => {
            const robotMessage = {
                author: AUTHORS.robot,
                text: 'Hello! Glad to see you!',
                id: `${Date.now()}`
            }
            dispatch(addMessage(chatId, robotMessage));
        }, 1500);
    }
  };