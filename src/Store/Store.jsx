import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import LikedSlice from "./LikedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: LikedSlice,
  },
});
export default store;
