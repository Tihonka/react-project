import { ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { deleteChat } from '../../store/chats/actions';
import { useDispatch } from 'react-redux';

export const ChatItem = ({ chat }) => {
    const dispatch = useDispatch();
    const onDeleteChat = () => {
        dispatch(deleteChat(chat.id));
      };
  
    return (
       <>
      <ListItemButton>
            <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
             to={`/chats/${chat.id}`}>
              <ListItemText primary={chat.name} />
            </NavLink>
      </ListItemButton>
      <button className="button" onClick={ ()=> onDeleteChat(chat.id) }>X</button>
        </>
    );
  };