import React, { useState, useCallback } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Chats from './components/Chats/Chats';
import { Profile } from './components/Profile/Profile';
import { ChatList } from './components/ChatList/ChatList';
import { AUTHORS } from './utils/constants';


const initialChatList = [
  {
    name: 'Friends',
    id: 'Friends',
  },
  {
    name: 'Family',
    id: 'Family',
  },
  {
    name: 'GB',
    id: 'GB',
  }
];

const initialMessages = {
  Friends: [
    {
      text: "Hello!",
      author: AUTHORS.user,
      id: 1,
    },
  ],
  Family: [
    {
      text: "my family",
      author: AUTHORS.user,
      id: 2,
    },
  ],
  GB: [
    {
      text: "GeekBrains",
      author: AUTHORS.user,
      id: 3,
     },
  ],
};

export const App = () =>{
  const [chatList, setChatList] = useState(initialChatList);
  const [messages, setMessages] = useState(initialMessages);

  const handleAddChat = useCallback((name) => {
    const newId = `chat${Date.now()}`;

    setChatList((prevChatList) => [...prevChatList, { name, id: newId }]);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [newId]: [],
    }));
  }, []);

  const handleDeleteChat = useCallback((idToDelete) => {
    setChatList((prevChatList) =>
      prevChatList.filter(({ id }) => id !== idToDelete)
    );
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[idToDelete];

      return newMessages;
    });
  }, []);

return(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="profile" element={ <Profile /> } />
      <Route path="chats" >
        <Route index element={ <ChatList onAddChat={ handleAddChat } onDeleteChat={ handleDeleteChat } chatList={ chatList } />} />
        <Route path=":chatId" element={ <Chats chatList={ chatList } messages= { messages } setMessages= { setMessages } onAddChat= {handleAddChat} onDeleteChat={ handleDeleteChat } />} />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
)
};
