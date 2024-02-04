import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  setCart: (state, { payload }: PayloadAction<any>) => {
   let newProduct = { ...payload };
   newProduct.quantity = 1;
   state.value = [newProduct, ...state.value];
   console.log(state.value);
  },
 },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
