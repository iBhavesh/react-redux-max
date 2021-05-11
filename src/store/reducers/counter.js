import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload = 1 }) => {
      state.counter += payload;
    },
    decrement: (state, { payload = 1 }) => {
      state.counter -= payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, toggleCounter } = counter.actions;
export default counter.reducer;
