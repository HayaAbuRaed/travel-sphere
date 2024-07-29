import { Middleware } from "@reduxjs/toolkit";
import { CartState } from "src/features/cart/types";

const localStorageKey = "cartState";

const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch {
    console.error("Could not save state to local storage");
  }
};

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const cartState = storeAPI.getState().cart;
  saveState(cartState);
  return result;
};

export default localStorageMiddleware;
