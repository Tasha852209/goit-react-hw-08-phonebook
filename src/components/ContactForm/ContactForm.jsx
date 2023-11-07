// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import css from './ContactForm.module.css';
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
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="">
        <p>Name</p>
        <input
          type="text"
          name="name"
          // onChange={handleChange}
          value={contacts.name}
          required
        />
      </label>
      <label htmlFor="">
        <p>Number</p>
        <input
          type="tel"
          name="number"
          // onChange={handleChange}
          value={contacts.number}
          required
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
