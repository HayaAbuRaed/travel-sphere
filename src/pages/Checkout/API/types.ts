export interface BookRequest {
  customerName: string;
  hotelName: string;
  roomNumber: number;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

export interface BookingResponse {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
  bookingStatus: string;
  confirmationNumber: string;
}
