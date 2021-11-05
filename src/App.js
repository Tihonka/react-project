import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { Form }  from './components/Form/Form';



function App() {
  const [messages, setMessages] = useState([{text: 'text1', author: 'user'}])

  const handleSendMessage = useCallback((newMessage) =>{
    setMessages(prevMessages =>[...prevMessages, newMessage])
  }, []);

  useEffect(() =>{
    if(messages.length && messages[messages.length - 1].author !=='robot'){
      const timeout = setTimeout( () =>
      handleSendMessage({author:'robot', text: 'Hello! Glad to see you!', id: `${Date.now()}`})
      , 1500)

      return () => clearTimeout(timeout)
    }
  },[messages]);

  return (
    <div className="App">
      <header className="App-header">
        <MessageList messages={messages}/>
        <Form onSendMessage={handleSendMessage}/>
      </header>
    </div>
  );
}

export default App;
