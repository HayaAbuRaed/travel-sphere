import TrashIcon from "@mui/icons-material/DeleteOutlined";
import CheckoutIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "src/features/cart/cartSlice";
import { selectCart } from "src/features/cart/selectors";
import { showSuccessSnackbar } from "src/features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { isRoomInCart } from "src/utils/room";
import AmenityChip from "../AmenityChip";
import styles from "./style.module.css";
import { RoomCardProps } from "./types";

const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const cartState = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    roomId,
    roomType,
    roomPhotoUrl,
    price,
    capacityOfAdults,
    capacityOfChildren,
    roomAmenities,
    availability,
  } = room;

  const isInCart = isRoomInCart(cartState, roomId);

  const inCartPage = location.pathname === "/me/cart";

  const handleAddToCart = () => {
    dispatch(addToCart(room));
    dispatch(showSuccessSnackbar({ message: "Room added to cart" }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(roomId));
    dispatch(showSuccessSnackbar({ message: "Room removed from cart" }));
  };

  const handleCheckout = () => {
    navigate(`/me/checkout/${roomId}`);
  };

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
      <CardActions
        sx={{
          justifyContent: "center",
          pb: 2,
          gap: 1,
          mt: "auto",
        }}
      >
        {!inCartPage && (
          <Button
            onClick={handleAddToCart}
            disabled={!availability || isInCart}
            startIcon={<CartIcon />}
            variant="contained"
            aria-label="add-to-cart"
            color="secondary"
            size="small"
            disableElevation
            className={styles.button}
          >
            {!isInCart ? "Add to cart" : "Added to cart"}
          </Button>
        )}

        {inCartPage && (
          <>
            <Button
              onClick={handleCheckout}
              startIcon={<CheckoutIcon />}
              variant="contained"
              aria-label="checkout"
              color="info"
              size="small"
              disableElevation
              className={styles.button}
            >
              Checkout
            </Button>
            <Button
              onClick={handleRemoveFromCart}
              startIcon={<TrashIcon />}
              variant="contained"
              aria-label="remove-from-cart"
              color="error"
              size="small"
              disableElevation
              className={styles.button}
            >
              Remove
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default RoomCard;
