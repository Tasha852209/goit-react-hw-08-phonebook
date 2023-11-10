import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 3px solid #289b22;
  gap: 5px;
  div {
    display: flex;
    gap: 15px;
  }
`;
export const StyledHomePage = styled.p`
  display: flex;
  gap: 150px;
  flex-direction: column;
  justify-content: center;
  margin-top: 110px;
  font-weight: 700;
  color: #289b22;
  font-size: 45px;
  text-align: center;
`;
export const StyledContacts = styled.p`
  font-size: 25px;
  padding-left: 20px;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  /* padding-left: 20px; */
`;
