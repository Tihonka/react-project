import React from 'react';
import { AUTHORS } from '../../utils/constants';
import { Message } from '../Message/Message';
import './MessageList.css';

export const MessageList = ({ messages }) => {

  return(
    <div className="messageList">
      { messages.map(message => (
        <div key={message.id} className={message.author==AUTHORS.robot?"robot":null} > 
           <Message message={message}/>
        </div>
      ))}
    </div>
  )
};