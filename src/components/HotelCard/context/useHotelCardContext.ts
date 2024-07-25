import { useContext } from "react";
import HotelCardContext from "./HotelCardContext";

const useHotelCardContext = () => {
  const context = useContext(HotelCardContext);

  if (!context) {
    throw new Error(
      "useHotelCardContext must be used within a HotelCardContextProvider"
    );
  }

  return context;
};

export default useHotelCardContext;
