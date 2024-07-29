import { RootState } from "src/store";

export const selectCart = (state: RootState) => state.cart;

export const selectCartTotalItems = (state: RootState) => state.cart.totalItems;
