import React, {useRef, useState} from 'react';
import './Form.css'

export const Form = ({onSendMessage}) =>{
  const [value, setValue] = useState('');

  const handleChange = (e) => {
      setValue(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();    
      onSendMessage({
          text: value,
          author: 'user',
          id: `${Date.now()}`
      })
      setValue('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type='text' className="messageText" value={value} onChange={handleChange} />
        <input type="submit"  className="btnSubmit"/>
      </form>
  )
}

