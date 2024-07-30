import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import RoomCard from "src/components/RoomCard";
import { selectCart } from "src/features/cart/selectors";
import { useAppSelector } from "src/store/hooks";

const Cart: FC = () => {
  const { items } = useAppSelector(selectCart);

  return (
    <Grid container direction="column" alignItems="center" p={5} pt={4} pr={3}>
      <Grid item>
        <Typography variant="h6" gutterBottom>
          Choose a room to checkout
        </Typography>
      </Grid>

      <Grid
        item
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