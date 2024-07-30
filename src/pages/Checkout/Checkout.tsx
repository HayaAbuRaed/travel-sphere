import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import AmenityChip from "src/components/AmenityChip";
import { selectCart } from "src/features/cart/selectors";
import { useAppSelector } from "src/store/hooks";
import { getCartRoom } from "src/utils/room";
import { BookingResponse } from "./API/types";
import CheckoutForm from "./components/CheckoutForm";
import PostCheckoutTable from "./components/PostCheckoutTable";
import styles from "./style.module.css";

const Checkout: FC = () => {
  const cartState = useAppSelector(selectCart);

  const roomId = useParams<{ roomId: string }>().roomId;

  const room = getCartRoom(cartState, roomId ?? "");

  const bookingResponse = sessionStorage.getItem(`bookingResponse${roomId}`);

  if (bookingResponse) {
    const response: BookingResponse = JSON.parse(bookingResponse);

    return <PostCheckoutTable details={response} />;
  }

  if (!room) {
    return (
      <Grid container p={5}>
        <Typography>Room not found</Typography>
      </Grid>
    );
  }

  const {
    roomType,
    roomPhotoUrl,
    roomNumber,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
  } = room;

  return (
    <Grid container p={5} gap={4}>
      <Grid item container xs gap={2} direction="column">
        <Stack>
          <Typography variant="h4">{roomType}</Typography>
          <Typography variant="h6" fontSize="large">
            Room Number: {roomNumber}
          </Typography>
          <Typography variant="h6" color="secondary">
            Total Price: ${price}
          </Typography>
        </Stack>

        <img src={roomPhotoUrl} alt={roomType} className={styles.roomImage} />

        <Stack gap={1} alignItems="flex-start">
          {roomAmenities.map(({ name, description }) => (
            <AmenityChip key={name} label={`${name}: ${description}`} />
          ))}
        </Stack>

        <Stack
          p={2}
          maxWidth={500}
          sx={{ background: "#e5e5e5", borderRadius: 2 }}
        >
          <Typography variant="subtitle1">
            Capacity of Adults: &nbsp;{capacityOfAdults}
          </Typography>
          <Typography variant="subtitle1">
            Capacity of Children: &nbsp;{capacityOfChildren}
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={5} sx={{ backgroundColor: "#f5f5f5" }} p={3}>
        <Typography variant="h6" gutterBottom>
          Checkout Information
        </Typography>
        <CheckoutForm room={room} />
      </Grid>
    </Grid>
  );
};

export default Checkout;
