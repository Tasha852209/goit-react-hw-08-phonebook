import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
  filterContacts,
} from 'redux/ContactsSlice';
import { useEffect } from 'react';
import {
  selectError,
  selectFilter,
  selectIsLoading,
  selectItems,
} from 'redux/selectors';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const addNewContact = newContact => {
    contacts.some(({ name }) => name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleFilterContacts = filteredValue => {
    dispatch(filterContacts(filteredValue));
  };

  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} handleFilterContacts={handleFilterContacts} />
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ContactList
        contacts={getFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
export default ContactsPage;
