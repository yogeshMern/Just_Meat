import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItem: [],
    subTotal: 0,
    shipping: 0,
    total: 0,
    tax: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItem.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) i.quantity++;
        });
      } else {
        state.cartItem.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload.id);

      if (item.quantity > 1) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) i.quantity--;
        });
      }
    },

    deleteItem: (state, action) => {
      state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    },

    calculatePrice: (state) => {
      let sum = 0;
      state.cartItem.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 100 ? 0 : 100;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.shipping + state.tax;
    },
  }
);
