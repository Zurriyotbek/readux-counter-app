import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 2,
  },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;


const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
