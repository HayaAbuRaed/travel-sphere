import { createContext } from "react";
import { Hotel } from "../types";

// export const INITIAL_VALUES: Hotel = {
//   hotelId: -1,
//   hotelName: "",
//   cityName: "",
//   starRating: 0,
//   discount: 0,
//   description: "",
// };

const HotelCardContext = createContext<Hotel | null>(null);

export default HotelCardContext;
