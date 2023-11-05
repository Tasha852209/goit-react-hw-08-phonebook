import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <button>Log Out</button>
      </nav>
    </header>
  );
};

export default Navigation;
