import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  value: [],
 },
 reducers: {
  setCart: (state, { payload }: PayloadAction<any>) => {
   let newProduct = { ...payload.product };
   newProduct.quantity = 1;
   state.value = [newProduct as never, ...state.value];
  },
  removeCart: (state, { payload }: PayloadAction<any>) => {
   if (payload.el) {
    state.value = state.value.filter((el: any) => el.id !== payload.el.id);
    return;
   }
   state.value = state.value.filter((el: any) => el.id !== payload.product.id);
  },
  setQuantity: (state: any, { payload }: PayloadAction<any>) => {
   state.value.map((prod: any) => {
    if (prod.id === payload.el.id) {
     return (prod.quantity = payload.quantity);
    }
    return prod;
   });
  },
  removeAll: (state) => {
   state.value = [];
  },
 },
});

export const { setCart, removeCart, setQuantity, removeAll } =
 cartSlice.actions;
export default cartSlice.reducer;
