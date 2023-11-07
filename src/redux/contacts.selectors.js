import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contactsStore;

export const selectItems = createSelector(
  selectContacts,
  contactsStore => contactsStore.contacts.items
);
export const selectFilter = createSelector(
  selectContacts,
  contactsStore => contactsStore.filter
);
export const selectIsLoading = createSelector(
  selectContacts,
  contactsStore => contactsStore.contacts.isLoading
);
export const selectError = createSelector(
  selectContacts,
  contactsStore => contactsStore.contacts.error
);

// Не оптимізовані селектори
//export const selectItems = state => state.contactsStore.contacts.items
// export const selectFilter = state => state.contactsStore.filter;
// export const selectIsLoading = state => state.contactsStore.contacts.isLoading;
// export const  = state => state.contactsStore.contacts.error;
