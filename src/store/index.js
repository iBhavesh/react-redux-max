import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
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

export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
