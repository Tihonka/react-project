import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import './ChatList.css'

export const ChatList = ({ chatList, onAddChat, onDeleteChat }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('');
    onAddChat(value);
  };

  return (
    <List>
      { chatList.map(chat => (
          <ListItem disablePadding key={chat.id}>
      <ListItemButton>
            <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
             to={`/chats/${chat.id}`}>
              <ListItemText primary={chat.name} />
            </NavLink>
      </ListItemButton>
      <button className="button" onClick={ ()=> onDeleteChat(chat.id) }>X</button>
          </ListItem>
            ))}
     <form onSubmit={ handleSubmit }>
        <input type="text" value={ value } onChange={ handleChange } placeholder="chat name"></input>
        <button type="submit" className="button">Add chat</button>
     </form>
     </List>
  )
};