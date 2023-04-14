import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormValues } from 'components/FormPerson';

interface FormState {
  persons: FormValues[];
}
const initialState: FormState = {
  persons: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addToCards(state, action: PayloadAction<FormValues>) {
      state.persons = [...state.persons, action.payload];
    },
  },
});
export const { addToCards } = formSlice.actions;

export default formSlice.reducer;
