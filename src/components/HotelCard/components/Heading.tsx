import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import useHotelCardContext from "../context/useHotelCardContext";
import { HeadingProps } from "../types";

const Heading: FC<HeadingProps> = ({ subtitle }) => {
  const { title } = useHotelCardContext();
  return (
    <Stack flexDirection="row" alignItems="center" gap={1}>
      <Typography gutterBottom variant="h6" noWrap>
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="subtitle2"
        color="text.secondary"
        noWrap
      >
        {subtitle}
      </Typography>
    </Stack>
  );
};

export default Heading;
