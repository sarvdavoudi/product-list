import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slices/cartSlice";
import themeReducer from "@/redux/slices/themeSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    theme:themeReducer
  },
});
