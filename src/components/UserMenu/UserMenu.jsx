import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutThunk } from 'redux/AuthSlice';
import { selectAuthUserData } from 'redux/auth.selectors';
import { StyledButton, StyledDiv, StyledNavLink } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUserData);
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledDiv>
        <p>{name},</p>
        <StyledButton className="logout" onClick={handleLogout}>
          Log Out
        </StyledButton>
      </StyledDiv>
    </>
  );
};

export default UserMenu;
