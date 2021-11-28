import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';
import { MessageList } from '../MessageList/MessageList';
import { Form }  from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import { AUTHORS } from '../../utils/constants';
import './Chats.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessage } from '../../store/messages/actions';

function Chats() {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessage) =>{
      dispatch(addMessage(chatId, newMessage));
    },
    [chatId]
  );

  useEffect(() =>{
    if (
        messages[chatId]?.length &&
        messages[chatId]?.[messages[chatId]?.length - 1].author !=='robot'){
      const timeout = setTimeout( () =>
      handleSendMessage({author:AUTHORS.robot, text: 'Hello! Glad to see you!', id: `${Date.now()}`})
      , 1500)

      return () => clearTimeout(timeout)
    }
  },[messages]);

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App">
        <div className="chatsList" >
        <ChatList />
        </div>
        <div className="chat">
        <MessageList messages={messages[chatId]}/>
        <Form onSendMessage={handleSendMessage}/>
        </div>
    </div>
  );
}

export default Chats;
