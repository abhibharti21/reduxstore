import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const likedSlice = createSlice({
  name: "LikedProduct",
  initialState,
  reducers: {
    addLike(state, action) {
      state.push(action.payload);
    },
    removeLike(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addLike, removeLike } = likedSlice.actions;

export default likedSlice.reducer;
