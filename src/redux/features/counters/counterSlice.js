import { createSlice } from "@reduxjs/toolkit";

const allCounters = [
  { id: 1, value: 1 },
  { id: 2, value: 1 },
];

const countersSlice = createSlice({
  name: "counters",
  initialState: allCounters,
  reducers: {
    increment: (state, action) => {
      // here i can easily mutate the states
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].value++;
    },
    decrement: (state, action) => {
      // here i can easily mutate the states
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
