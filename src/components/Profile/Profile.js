import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/actions';

export const Profile = () =>{
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCheckbox);
  };

  return (
  <>
  <h3>Profile</h3>
  <input type='checkbox' checked={ state.checkbox} onChange={ handleChange } />
  <span>{ state.name }</span>
  </>)
}