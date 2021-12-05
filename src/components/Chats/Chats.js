import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';
import { MessageList } from '../MessageList/MessageList';
import { Form }  from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import './Chats.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessageWithReply } from '../../store/messages/actions';

function Chats() {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessage) =>{
      dispatch(addMessageWithReply(chatId, newMessage));
    },
    [chatId]
  );

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
