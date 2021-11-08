import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ChatList = ({ chats}) => (
    <List>
      { chats.map(chat => (
          <ListItem disablePadding key={chat.id}>
      <ListItemButton>
              <ListItemText primary={chat.name} />
      </ListItemButton>
          </ListItem>
            ))}
     </List>
)