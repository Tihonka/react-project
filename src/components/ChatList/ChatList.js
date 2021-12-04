import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './ChatList.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from '../../store/chats/selectors';
import { addChat } from '../../store/chats/actions';
import { ChatItem } from '../ChatItem/chatItem';

export const ChatList = () => {
  const chatList = useSelector(selectChat);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = `chat${Date.now()}`;
    dispatch(addChat({name: value, id: newId}));

    setValue('');
  };

    return (
    <List>
      { chatList.map(chat => (
          <ListItem disablePadding key={chat.id} chat={ chat }>
          <ChatItem chat={chat}/>
          </ListItem>
            ))}
     <form onSubmit={ handleSubmit }>
        <input type="text" value={ value } onChange={ handleChange } placeholder="chat name"></input>
        <button type="submit" className="button">Add chat</button>
     </form>
     </List>
  )
};