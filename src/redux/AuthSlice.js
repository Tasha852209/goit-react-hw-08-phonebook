import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'services/api';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,

  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => builder,
  //   .addCase(fetchContacts.pending, state => {
  //     state.contacts.isLoading = true;
  //     state.contacts.error = null;
  //   })
  //   .addCase(fetchContacts.fulfilled, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = action.payload;
  //   })
  //   .addCase(fetchContacts.rejected, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   })
  //   .addCase(addContact.pending, state => {
  //     state.contacts.isLoading = true;
  //     state.contacts.error = null;
  //   })
  //   .addCase(addContact.fulfilled, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = [action.payload, ...state.contacts.items];
  //   })
  //   .addCase(addContact.rejected, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   })
  //   .addCase(deleteContact.pending, state => {
  //     state.contacts.isLoading = true;
  //     state.contacts.error = null;
  //   })
  //   .addCase(deleteContact.fulfilled, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== action.payload.id
  //     );
  //   })
  //   .addCase(deleteContact.rejected, (state, action) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   }),
});

export const { filterContacts } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
