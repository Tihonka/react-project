import React, {useEffect, useRef, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css'

export const Form = ({onSendMessage}) =>{
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect( () =>{
      inputRef?.current.focus()
  });

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
      inputRef.current?.focus();
      setValue('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Ваше сообщение" variant="standard" value={value} onChange={handleChange} inputRef={inputRef} />
          <Button type="submit" variant="contained" size="large" >Отправить</Button>
      </form>
  )
}

