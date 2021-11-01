import React from 'react';
import './Message.css'

export const Message = ({ message }) => {
    return (
        <h3 className="textMessage">{ message }</h3>
    )
}