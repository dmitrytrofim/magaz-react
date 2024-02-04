import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const productsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {
  setProducts: (state, action: PayloadAction<any>) => {
   state.value = action.payload;
  },
 },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
