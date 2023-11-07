import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/AuthSlice';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUserData);
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <NavLink to="/contacts">Contacts</NavLink>
      <p>{name},</p>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default UserMenu;
