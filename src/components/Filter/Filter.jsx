import React from 'react';
import css from './Filter.module.css';
export const Filter = ({ value, handleFilterContacts }) => {
  const handleChange = e => handleFilterContacts(e.target.value);
  return (
    <div className={css.filter}>
      <input
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
