import { RoomResponse } from "src/types/room";

export interface CartItem extends RoomResponse {}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
