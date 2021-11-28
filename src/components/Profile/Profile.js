import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, toggleCheckbox } from '../../store/profile/actions';
import { selectName } from '../../store/profile/selectors';

export const Profile = () =>{

  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(selectName)
  const dispatch = useDispatch();

  const [value, setValue] = useState(name);

  const handleChange = () => {
    dispatch(toggleCheckbox);
  };

  const handleChangeText= (e) =>{
    setValue(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(changeName(value));
  };

  return (
  <>
  <h3>Profile</h3>
  <input type='checkbox' checked={ checkboxValue } onChange={ handleChange } />
  <form onSubmit= { handleSubmit }> 
    <input type='text' value= { value } onChange={ handleChangeText } />
    <input type='submit' />
  </form>
  </>)
}