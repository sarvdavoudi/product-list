// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       if (state.value > 0) {
//         state.value -= 1;
//       }
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      // Add a new item to the cart with a unique identifier and quantity of 1
      const newItem = { ...action.payload, id: Date.now(), quantity: 1 };

      state.cartItems.push(newItem);
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementItem(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem(state, action) {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Optionally, remove item if quantity reaches 0
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
