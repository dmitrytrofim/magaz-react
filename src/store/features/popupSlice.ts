import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
 name: 'popup',
 initialState: {
  value: false,
 },
 reducers: {
  togglePopup: (state: any) => {
   state.value = !state.value;
  },
 },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
