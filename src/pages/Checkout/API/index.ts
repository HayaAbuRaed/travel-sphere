import axios from "src/API/axios";
import { BookingResponse, BookRequest } from "./types";

export const addBooking = async (bookRequest: BookRequest) => {
  try {
    const response = await axios.post<BookingResponse>(
      "/bookings",
      bookRequest
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
