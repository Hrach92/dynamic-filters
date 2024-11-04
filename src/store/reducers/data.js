import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'weather',
  initialState: {
    data: []
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload
    }
  },
});

export const { setData } = dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;