'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadCartFromStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('whatbytes-cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Cart load error:', e);
      return [];
    }
  }
  return [];
};

const preloadedState = {
  cart: {
    items: loadCartFromStorage()
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState
});

if (typeof window !== 'undefined') {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('whatbytes-cart', JSON.stringify(state.cart.items));
  });
}
