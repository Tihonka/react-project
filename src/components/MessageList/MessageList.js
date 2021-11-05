import React from 'react';
import './MessageList.css';

export const MessageList = ({ messages}) => (
    <div className="messageList">
      { messages.map(message => (
        <div className={message.author=="robot"?"robot":null}> 
            <span className="messageAuthor">{message.author} :</span> <br />   
            <span>{message.text}</span>
        </div>
      ))}
    </div>
)