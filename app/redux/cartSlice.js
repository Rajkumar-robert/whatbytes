"use client";

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
   addToCart: (state, action) => {
  const product = action.payload;
  const existingItem = state.items.find(item => item.id === product.id);

  if (existingItem) {
   
    existingItem.quantity = product.quantity;
  } else {
    state.items.push({ ...product, quantity: product.quantity ?? 1 });
  }
},
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    loadCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  loadCart,
} = cartSlice.actions;
export default cartSlice.reducer;
