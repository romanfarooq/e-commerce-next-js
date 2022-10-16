import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  // Temporary data
  initialState: {
    cart: [
      {
        id: 1,
        name: 'T-Shirt',
        quantity: 3,
        price: 1000,
        size: 'M',
        variant: 'Black',
      },
      {
        id: 2,
        name: 'Polo Shirt',
        quantity: 4,
        price: 500,
        size: 'L',
        variant: 'White',
      },
    ],
    subTotal: 5000,
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length === 0) {
        state.cart.push(action.payload);
        state.subTotal += action.payload.price;
      } else {
        const productIndex = state.cart.findIndex((item) => item.id === action.payload.id);
        if (productIndex === -1) {
          state.cart.push(action.payload);
          state.subTotal += action.payload.price;
        } else {
          state.cart[productIndex].quantity += 1;
          state.subTotal += action.payload.price;
        }
      }
    },
    increaseQuantity: (state, action) => {
      const productIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[productIndex].quantity += 1;
      state.subTotal += action.payload.price;
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[productIndex].quantity === 1) {
        state.cart.splice(productIndex, 1);
        state.subTotal -= action.payload.price;
      } else {
        state.cart[productIndex].quantity -= 1;
        state.subTotal -= action.payload.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.subTotal = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
