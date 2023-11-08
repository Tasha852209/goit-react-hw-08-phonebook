// import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
} from 'components/RegisterForm/RegisterForm.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';
import { useSelector } from 'react-redux';

import { selectItems } from 'redux/contacts.selectors';
// import { useState } from 'react';
// import { selectItems } from 'redux/selectors';

// const INITIAL_FORM_STATE = {
//   name: '',
//   phone: '',
// };

export const ContactForm = ({ addNewContact }) => {
  // const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const contacts = useSelector(selectItems);
  // const handleChange = ({ target: { name, value } }) => {
  //   setFormData(prevState => ({ ...prevState, [name]: value }));
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const contactName = e.currentTarget.elements.name.value;
    const contactPhone = e.currentTarget.elements.number.value;

    const newContact = { name: contactName, number: contactPhone };

    addNewContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <p>Name</p>
        <StyledInput
          type="text"
          name="name"
          // onChange={handleChange}
          value={contacts.name}
          required
        />
      </StyledLabel>
      <StyledLabel>
        <p>Number</p>
        <StyledInput
          type="tel"
          name="number"
          // onChange={handleChange}
          value={contacts.number}
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
