import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";

const PriceSegment: FC = () => {
  const { originalRoomPrice: originalPrice, discount } = useHotelCardContext();
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography
        variant="h6"
        color={discount === 1 ? "text.primary" : "#e53935"}
      >
        ${originalPrice! * discount}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textDecoration: "line-through" }}
      >
        ${originalPrice}
      </Typography>
    </Stack>
  );
};

export default PriceSegment;
