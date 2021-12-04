import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Chats from './components/Chats/Chats';
import { Profile } from './components/Profile/Profile';
import { ChatList } from './components/ChatList/ChatList';
import { Quotes } from './components/Quotes/quotes';

export const App = () =>{
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
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
      </ul>
  
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="profile" element={ <Profile /> } />
        <Route path="quotes" element={ <Quotes /> } />
        <Route path="chats" >
          <Route index element={ <ChatList />} />
          <Route path=":chatId" element={ <Chats />} />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
   )
};
