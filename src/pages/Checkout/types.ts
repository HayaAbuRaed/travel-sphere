import { RoomResponse } from "src/types/room";
import { BookingResponse } from "./API/types";

export interface CheckoutFormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: PaymentType;
  cardNumber: string;
  expiry: string;
  cvv: string;
  specialRequests: string;
}

export enum PaymentType {
  CREDIT_CARD = "credit-card",
  PAYPAL = "paypal",
  CASH = "cash",
}

export interface PostCheckoutTableProps {
  details: BookingResponse;
}

export interface RoomInfoProps {
  room: RoomResponse;
}
