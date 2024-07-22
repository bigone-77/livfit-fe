import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scoreArray: [],
};

const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.scoreArray.push(...action.payload);
    },
    resetCounter: (state) => {
      state.scoreArray = [];
    },
  },
});

export const { setCounter, resetCounter } = playSlice.actions;

export default playSlice.reducer;
