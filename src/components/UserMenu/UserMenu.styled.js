import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding: 0 5px;

  &:hover,
  &:focus,
  &.active {
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: -4px -2px 63px 35px rgb(255, 255, 255) inset;
    -webkit-box-shadow: -4px -2px 63px 35px rgb(255, 255, 255) inset;
    -moz-box-shadow: -4px -2px 63px 35px rgb(255, 255, 255) inset;
    color: #289b22;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
  margin-left: auto;

  text-decoration: none;
  p {
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    margin: 0;
  }
`;
export const StyledButton = styled.button`
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 5px;
  font-weight: 500;
  font-size: 20px;
  color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #289b22;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  max-width: 120px;
  &.delete {
    margin-left: 10px;
    padding: 3px 0px 0px 0px;
    font-size: 18px;
    width: 30px;
    background-color: white;
    fill: red;
    &:hover,
    &:focus,
    &:active {
      fill: white;
      background-color: red;
    }
  }
  &.logout {
    padding: 0 5px;
    font-size: 20px;
  }
  &:hover,
  &:active {
    /* scale: 1.1; */
    color: #289b22;
    background-color: white;
    /* border: 2px solid #289b22; */
    /* outline-offset: -2px; */
  }
`;
