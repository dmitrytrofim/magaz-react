import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export const totalSumma = createSlice({
 name: 'total',
 initialState: {
  value: 0,
 },
 reducers: {
  summaTotal: (state: any, { payload }: PayloadAction) => {
   state.value = payload;
  },
 },
});

export const { summaTotal } = totalSumma.actions;
export default totalSumma.reducer;
