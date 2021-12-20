import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from '../actions';
import { chatsReducer } from '../reducer';

describe('chatsReducer', () =>{
  const chatList = [
      {chat:'chat1',
       id: 1
      }
    ];

  it('add chat test', () =>{
    
    const payload = {
        chat: 'newChat',
        id: 2
    };
    const type = ADD_CHAT;
        
    const result = chatsReducer(chatList, {type, payload});
   
    expect(result).toContain(payload);
  });

  it('delete chat test', () =>{
      const type = DELETE_CHAT;
      const payload = 1;

      const result = chatsReducer(chatList, {type, payload});
      expect(result.length).toEqual(1);
  });

  it('set chats test', () =>{
      const type = SET_CHATS;
      const payload = chatList;

      const result = chatsReducer(chatList, {type, payload});
      expect(result).toEqual(chatList);
  })
});