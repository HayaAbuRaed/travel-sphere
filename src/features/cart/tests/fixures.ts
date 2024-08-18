import { CartItem, CartState } from "../types";

export const sampleCartItem: CartItem = {
  roomId: 1,
  roomNumber: 101,
  roomPhotoUrl: "http://example.com/photo.jpg",
  roomType: "Deluxe",
  capacityOfAdults: 2,
  capacityOfChildren: 1,
  roomAmenities: [{ name: "WiFi", description: "free wifi connection" }],
  price: 100,
  availability: true,
};

export const sampleCartState: CartState = {
  items: [sampleCartItem],
  totalItems: 1,
  totalPrice: 100,
};

export const sampleInitialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};
