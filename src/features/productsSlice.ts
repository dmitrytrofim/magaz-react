import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Array<Object> = [];

export const productsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {
  setProducts: (state, action: PayloadAction<any>) => {
   state = action.payload;
  },
 },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
