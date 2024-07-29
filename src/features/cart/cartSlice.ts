import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./utils";
import { CartItem, CartState } from "./types";

const initialState: CartState = loadState();

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const isItemInCart = state.items.some(
        (item) => item.roomId === action.payload.roomId
      );

      if (isItemInCart) return;

      state.items.push(action.payload);
      state.totalItems += 1;
      state.totalPrice += action.payload.price;

      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (item) => item.roomId === action.payload
      );

      if (index !== -1) {
        state.totalPrice -= state.items[index].price;
        state.items.splice(index, 1);
        state.totalItems -= 1;

        localStorage.setItem("cartItems", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
