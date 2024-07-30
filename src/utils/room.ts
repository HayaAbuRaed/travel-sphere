import { CartState } from "src/features/cart/types";

export const isRoomInCart = (state: CartState, roomId: number) => {
  return state.items.some((item) => item.roomId === roomId);
};

export const getCartRoom = (state: CartState, roomId: number | string) => {
  return state.items.find((item) => item.roomId === Number(roomId));
};
