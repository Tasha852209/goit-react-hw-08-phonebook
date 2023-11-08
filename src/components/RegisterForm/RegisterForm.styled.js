import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 0 20px 30px 20px;
  min-width: 320px;
`;

export const StyledP = styled.p`
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: bold;
  font-family: Segoe UI;
  color: #289b22;
  /* text-align: center; */
`;
export const StyledInput = styled.input`
  padding: 12px;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.2;
  border: 1px solid grey;
  border-radius: 8px;
  width: 280px;
  cursor: pointer;
  /* transition: 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  &:focus {
    /* border: 3px solid grey; */
    outline-offset: -1px;
    outline: 2px solid #289b22;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  font-family: Segoe UI;
  color: #5e5e5e;
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
