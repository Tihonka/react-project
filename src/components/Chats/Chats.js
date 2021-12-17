import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';
import { push } from 'firebase/database';
import { MessageList } from '../MessageList/MessageList';
import { Form }  from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import { getChatMesListRefById } from '../../services/firebase';
import './Chats.css';

function Chats({ mes }) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) =>{
      push(getChatMesListRefById(chatId), newMessage);
    },
    [chatId]
  );

  if (!mes[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App">
        <div className="chatsList" >
        <ChatList />
        </div>
        <div className="chat">
        <MessageList messages={mes[chatId]}/>
        <Form onSendMessage={handleSendMessage}/>
        </div>
    </div>
  );
}

export default Chats;
