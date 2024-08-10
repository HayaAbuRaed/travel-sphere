import { Grid, Stack, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectCart } from "src/features/cart/selectors";
import { useAppSelector } from "src/store/hooks";
import { getCartRoom } from "src/utils/room";
import { BookingResponse } from "./API/types";
import CheckoutForm from "./components/CheckoutForm";
import PostCheckoutTable from "./components/PostCheckoutTable";
import RoomInfo from "./components/RoomInfo";
import Lottie from "lottie-react";
import roomNotFound from "src/animations/roomNotFound.json";

const Checkout: FC = () => {
  const cartState = useAppSelector(selectCart);

  const roomId = useParams<{ roomId: string }>().roomId;

  const room = getCartRoom(cartState, roomId ?? "");

  const key = `bookingResponse${roomId}`;

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(key);
    };
  }, [key]);

  const bookingResponse = sessionStorage.getItem(key);

  if (bookingResponse) {
    const response: BookingResponse = JSON.parse(bookingResponse);

    return <PostCheckoutTable details={response} />;
  }

  if (!room) {
    return (
      <Stack
        height="calc(100vh - 64px - 48px)"
        justifyContent="center"
        alignItems="center"
      >
        <Lottie animationData={roomNotFound} style={{ minWidth: "240px" }} />
        <Typography variant="h6">Room not found</Typography>
      </Stack>
    );
  }

  return (
    <Grid container py={5} px={{ xs: 2.5, sm: 5 }} justifyContent="center">
      <Grid item container maxWidth={1200} gap={3}>
        <Grid item container xs={12} lg>
          <RoomInfo room={room} />
        </Grid>

        <Grid item xs={12} lg={5} sx={{ backgroundColor: "#f5f5f5" }} p={3}>
          <Typography variant="h6" gutterBottom>
            Checkout Information
          </Typography>
          <CheckoutForm room={room} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Checkout;
