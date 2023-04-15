import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.splice(action.payload, 1);
    },
    deleteall(state, action) {
      return [];
    },
  },
});

export const { add, remove, deleteall } = cartSlice.actions;

export default cartSlice.reducer;
