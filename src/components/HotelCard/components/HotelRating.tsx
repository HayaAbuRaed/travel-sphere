import { Rating } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";

const HotelRating: FC = () => {
  const { starRating } = useHotelCardContext();
  return (
    <Rating
      name="read-only"
      value={starRating}
      readOnly
      sx={{ "& .MuiRating-iconFilled": { color: "#FFE500" } }}
    />
  );
};

export default HotelRating;
