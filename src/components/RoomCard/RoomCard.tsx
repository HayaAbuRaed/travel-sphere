import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { RoomCardProps } from "./types";
import AmenityChip from "../AmenityChip";
import LoadingButton from "@mui/lab/LoadingButton";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./style.module.css";

const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const {
    roomType,
    roomPhotoUrl,
    price,
    capacityOfAdults,
    capacityOfChildren,
    roomAmenities,
    availability,
  } = room;

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 400,
        minHeight: 467.807,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
      }}
    >
      {!availability && (
        <>
          <Box className={styles.unavailabilityOverlay} />
          <Box className={styles.badgeBox}>
            <Typography variant="caption">Not available</Typography>
          </Box>
        </>
      )}

      <CardMedia
        component="img"
        height="194"
        image={roomPhotoUrl}
        alt={roomType}
        sx={{ p: 1.5, pb: 0, borderRadius: 8 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography variant="h6">{roomType}</Typography>
          <Typography variant="subtitle2" color="error">
            ${price} / night
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {capacityOfAdults} Adults, {capacityOfChildren} Children
        </Typography>

        <Stack flexDirection="row" flexWrap="wrap" gap={1} pt={3}>
          {roomAmenities.map(({ name }) => (
            <AmenityChip key={name} label={name} />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 2, mt: "auto" }}>
        <LoadingButton
          onClick={() => {}}
          disabled={!availability}
          startIcon={<CartIcon />}
          variant="contained"
          loadingPosition="start"
          aria-label="add-to-cart"
          color="secondary"
          size="small"
          disableElevation
          sx={{
            maxWidth: "225px",
            textTransform: "capitalize",
            borderRadius: 5,
            color: "#fafafa",
            px: 3,
          }}
        >
          Add to cart
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
