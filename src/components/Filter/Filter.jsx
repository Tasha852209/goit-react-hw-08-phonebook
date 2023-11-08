import React from 'react';
import css from './Filter.module.css';
import { StyledInput } from 'components/RegisterForm/RegisterForm.styled';
export const Filter = ({ value, handleFilterContacts }) => {
  const handleChange = e => handleFilterContacts(e.target.value);
  return (
    <div className={css.filter}>
      <StyledInput
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
