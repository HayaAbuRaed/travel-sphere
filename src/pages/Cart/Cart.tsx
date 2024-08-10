import { Grid, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import RoomCard from "src/components/RoomCard";
import { selectCart } from "src/features/cart/selectors";
import { useAppSelector } from "src/store/hooks";
import emptyCart from "src/animations/emptyCart.json";

const Cart: FC = () => {
  const { items } = useAppSelector(selectCart);

  if (items.length === 0) {
    return (
      <Stack
        height="calc(100vh - 64px)"
        justifyContent="center"
        alignItems="center"
      >
        <Lottie animationData={emptyCart} style={{ minWidth: "300px" }} />
        <Typography textAlign="center" fontWeight={500}>
          Your cart is empty. <br />
          Please add rooms to the cart to checkout
        </Typography>
      </Stack>
    );
  }

  return (
    <Grid container justifyContent="center" p={5} pt={4} pr={3} rowGap={1.25}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom textAlign="center">
          Choose a room to checkout
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        container
        gap={2}
        sx={{ maxWidth: 1100 }}
        justifyContent="center"
      >
        {items.map((item) => (
          <Grid
            item
            container
            xs
            md={3.8}
            key={item.roomId}
            justifyContent="center"
          >
            <RoomCard room={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Cart;
