import React from 'react';
import { AUTHORS } from '../../utils/constants';
import './MessageList.css';

export const MessageList = ({ messages}) => (
    <div className="messageList">
      { messages.map(message => (
        <div key={message.id} className={message.author==AUTHORS.robot?"robot":null} > 
            <span className="messageAuthor">{message.author} :</span> <br />   
            <span>{message.text}</span>
        </div>
      ))}
    </div>
)