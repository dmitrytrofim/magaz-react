import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import cartReducer from './features/cartSlice';
import popupToggle from './features/popupSlice';
import totalSumma from './features/totalSlice';

export const store = configureStore({
 reducer: {
  products: productsReducer,
  cart: cartReducer,
  popup: popupToggle,
  total: totalSumma,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
