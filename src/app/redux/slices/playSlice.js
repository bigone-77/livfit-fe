import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goalCount: 0,
  playTime: "",
  restTime: "",
  scoreArray: [],
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    setPlay: (state, action) => {
      state.goalCount = action.payload.goalCount;
      state.playTime = action.payload.playTime;
      state.restTime = action.payload.restTime;
    },

    setCounter: (state, action) => {
      state.scoreArray.push(...action.payload);
    },
    resetCounter: (state) => {
      state.scoreArray = [];
    },
  },
});

export const { setPlay, setCounter, resetCounter } = playSlice.actions;

export default playSlice.reducer;
