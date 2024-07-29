import { CART_ITEMS_KEY } from "src/constants/localStorage";
import { CartState } from "./types";

export const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem(CART_ITEMS_KEY);

    if (serializedState === null) {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    };
  }
};
