import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItemId
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Optionally, remove item if quantity reaches 0
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
