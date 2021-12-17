import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Chats from './components/Chats/Chats';
import { Profile } from './components/Profile/Profile';
import { ChatList } from './components/ChatList/ChatList';
import { Quotes } from './components/Quotes/quotes';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivedRoute/PrivedRoute';
import { SignUp } from './components/SignUp/SignUp';
import { auth, messagesRef } from './services/firebase';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from './store/profile/actions';
import { onValue } from 'firebase/database';

export const App = () =>{
  const dispatch = useDispatch();
  const [mes, setMes] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>{
      if (user) {
        dispatch(signIn());
      } else{
        dispatch(signOut());
      }

      return () => unsubscribe();
    });
  }, []);

  useEffect(() => {
    onValue(messagesRef, (snapshot) =>{
      const newMes = {};

      snapshot.forEach((chatMesSnap) =>{
        newMes[chatMesSnap.key] = Object.values(chatMesSnap.val().messageList || {});
      })

      setMes(newMes);
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
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
      </ul>
  
      <Routes>
        <Route path="/" element={ <PublicRoute><Home /></PublicRoute>} />
        <Route path="/signup" element={ <PublicRoute><SignUp /></PublicRoute>} />
        <Route path="profile" element={ <PrivateRoute><Profile /></PrivateRoute> } />
        <Route path="quotes" element={ <Quotes /> } />
        <Route path="chats" >
          <Route index element={ <PrivateRoute><ChatList /></PrivateRoute>} />
          <Route path=":chatId" element={ <PrivateRoute><Chats mes={ mes } /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
   )
};
