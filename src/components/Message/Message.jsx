import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { deleteMessage } from '../../store/messages/actions';
import './Message.css'

export const Message = ({ message }) => {
    const { chatId } = useParams();
    const dispatch = useDispatch();

    const onDeleteMessage = useCallback((idToDelete) =>{
        dispatch(deleteMessage(chatId, idToDelete));
      },
      [chatId]
    );

     return (
      <>
            <button className="button" onClick={ ()=> onDeleteMessage({idToDelete: message.id}) }>X</button>
            <span className="messageAuthor">{message.author} :</span> <br />   
            <span>{message.text}</span>
      </>
    )
}