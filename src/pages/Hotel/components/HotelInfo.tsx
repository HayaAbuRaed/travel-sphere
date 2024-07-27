import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";
import AmenityChip from "src/components/AmenityChip";
import { HotelInfoProps } from "../types";
import PlaceIcon from "@mui/icons-material/Place";

const HotelInfo: FC<HotelInfoProps> = ({ hotel }) => {
  const { hotelName, starRating, location, description, amenities } = hotel;

  return (
    <Grid container item xs={12} gap={1.75}>
      <Box>
        <Rating
          readOnly
          size="small"
          name="read-only"
          value={starRating}
          sx={{ display: "flex" }}
        />
        <Typography component="h2" variant="h5">
          {hotelName}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          alignItems="center"
        >
          <PlaceIcon sx={{ fontSize: "0.75rem" }} />
          {location}
        </Typography>
      </Box>

      <Typography variant="body2">{description}</Typography>
      <Stack gap={1} direction="row" flexWrap="wrap">
        {amenities.map(({ name }) => (
          <AmenityChip key={name} label={name} />
        ))}
      </Stack>
    </Grid>
  );
};

export default HotelInfo;
