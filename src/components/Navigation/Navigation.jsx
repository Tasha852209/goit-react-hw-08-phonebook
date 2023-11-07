import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthUserAuthenticated } from 'redux/auth.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthUserAuthenticated);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>

        {authenticated ? (
          <UserMenu />
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
