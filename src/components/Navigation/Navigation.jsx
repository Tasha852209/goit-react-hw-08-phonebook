import UserMenu from 'components/UserMenu/UserMenu';
import { StyledNavLink } from 'components/UserMenu/UserMenu.styled';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuthUserAuthenticated } from 'redux/auth.selectors';
import { StyledNav } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthUserAuthenticated);

  return (
    <>
      <header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>

          {authenticated ? (
            <UserMenu />
          ) : (
            <div>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Log In</StyledNavLink>
            </div>
          )}
        </StyledNav>
      </header>
    </>
  );
};

export default Navigation;
