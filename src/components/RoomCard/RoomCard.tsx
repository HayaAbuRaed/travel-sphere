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
import AmenityChip from "../AmenityChip";
import styles from "./style.module.css";
import { RoomCardProps } from "./types";
import { isRoomInCart } from "src/utils/room";
import { selectCart } from "src/features/cart/selectors";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addToCart, removeFromCart } from "src/features/cart/cartSlice";
import { showSuccessSnackbar } from "src/features/snackbar/snackbarSlice";
import { useLocation } from "react-router-dom";

const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const cartState = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const location = useLocation();

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

  const allowRemoveFromCart = location.pathname === "/me/cart";

  const buttonDisabled = !availability || (isInCart && !allowRemoveFromCart);

  const handleAddToCart = () => {
    dispatch(addToCart(room));
    dispatch(showSuccessSnackbar({ message: "Room added to cart" }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(roomId));
    dispatch(showSuccessSnackbar({ message: "Room removed from cart" }));
  };

  const handleClick = () => {
    !isInCart && handleAddToCart();
    isInCart && allowRemoveFromCart && handleRemoveFromCart();
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
      <CardActions sx={{ justifyContent: "center", pb: 2, mt: "auto" }}>
        <Button
          onClick={handleClick}
          disabled={buttonDisabled}
          startIcon={<CartIcon />}
          variant="contained"
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
          {!isInCart && "Add to cart"}
          {isInCart &&
            (allowRemoveFromCart ? "Remove from cart" : "Added to cart")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
