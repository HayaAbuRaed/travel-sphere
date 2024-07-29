import { CART_ITEMS_KEY } from "src/constants/localStorage";
import { CartItem, CartState } from "./types";

const items =
  localStorage.getItem(CART_ITEMS_KEY) !== null
    ? JSON.parse(localStorage.getItem(CART_ITEMS_KEY) as string)
    : [];

export const initialState: CartState = {
  items,
  totalItems: items.length,
  totalPrice: items.reduce(
    (acc: number, item: CartItem) => acc + item.price,
    0
  ),
};
