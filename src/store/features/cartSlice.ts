import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  value: [],
 },
 reducers: {
  setCart: (state, { payload }: PayloadAction<any>) => {
   let newProduct = { ...payload };
   newProduct.quantity = 1;
   state.value = [newProduct as never, ...state.value];
  },
  quantityIncrement: (state: any, { payload }: PayloadAction<any>) => {
   state.value = [payload, ...state.value];
   console.log(state.value);
  },
 },
});

export const { setCart, quantityIncrement } = cartSlice.actions;
export default cartSlice.reducer;
