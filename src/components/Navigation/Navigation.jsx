import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/AuthSlice';
import { selectAuthUserAuthenticated } from 'redux/auth.selectors';

const Navigation = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthUserAuthenticated);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>

        {authenticated ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
