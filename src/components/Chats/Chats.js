import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';
import { MessageList } from '../MessageList/MessageList';
import { Form }  from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import { AUTHORS } from '../../utils/constants';
import './Chats.css';

function Chats({ chatList, messages, setMessages, onDeleteChat, onAddChat }) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) =>{
    setMessages(prevMessages => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
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
        <ChatList chatList={ chatList } onAddChat= { onAddChat } onDeleteChat={ onDeleteChat } />
        </div>
        <div className="chat">
        <MessageList messages={messages[chatId]}/>
        <Form onSendMessage={handleSendMessage}/>
        </div>
    </div>
  );
}

export default Chats;
