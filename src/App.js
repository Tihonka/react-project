import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { Form }  from './components/Form/Form';
import { ChatList } from './components/ChatList/ChatList';
import { AUTHORS } from './utils/constants';



function App() {
  const [messages, setMessages] = useState([{text: 'text1', author: AUTHORS.user, id: `${Date.now()}`}])
  const [chats, setChats] = useState([{name: 'Friends', id: 1}, {name: 'Family', id:  2}, {name: 'GeekBrains', id:  3},
  {name: 'ReactGroup', id:  4}])

  const handleSendMessage = useCallback((newMessage) =>{
    setMessages(prevMessages =>[...prevMessages, newMessage])
  }, []);

  useEffect(() =>{
    if(messages.length && messages[messages.length - 1].author !=='robot'){
      const timeout = setTimeout( () =>
      handleSendMessage({author:AUTHORS.robot, text: 'Hello! Glad to see you!', id: `${Date.now()}`})
      , 1500)

      return () => clearTimeout(timeout)
    }
  },[messages]);

  return (
    <div className="App">
        <div className="chatsList" >
        <ChatList chats={chats}/>
        </div>
        <div className="chat">
        <MessageList messages={messages}/>
        <Form onSendMessage={handleSendMessage}/>
        </div>
    </div>
  );
}

export default App;
