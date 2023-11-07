import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  padding: 0 5px;

  &:hover,
  &:focus {
    color: #289b22;

    border: 1px transparent;
    border-radius: 5px;
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
  font-weight: 500;
  font-size: 20px;
  color: white;
  border: 1px transparent;
  border-radius: 5px;
  background-color: #289b22;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  width: 120px;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
