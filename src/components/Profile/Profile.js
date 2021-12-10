import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, userRef } from '../../services/firebase';
import { changeName, toggleCheckbox } from '../../store/profile/actions';
import { selectName } from '../../store/profile/selectors';
import { onValue, set } from 'firebase/database';

export const Profile = () =>{

  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(selectName)
  const dispatch = useDispatch();

  const [value, setValue] = useState(name);

  const handleChange = () => {
    dispatch(toggleCheckbox);
  };

  useEffect(() =>{
    const unsubscribe = onValue(userRef, (snapshot) =>{
      const userData = snapshot.val();
      dispatch(changeName(userData?.name || ''));
    });

    return () => unsubscribe();
  }, [changeName]);

  const handleChangeText= (e) =>{
    setValue(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  const handleSignOut = async () => {
    try{
      await logOut();
    }catch(err) {
      console.log(err);
    }
  };

  return (
  <>
  <h3>Profile</h3>
  <input type='checkbox' checked={ checkboxValue } onChange={ handleChange } />
  <form onSubmit= { handleSubmit }> 
    <input type='text' value= { value } onChange={ handleChangeText } />
    <input type='submit' />
  </form>
  <button onClick={ handleSignOut}>SIGN OUT</button>
  </>)
}