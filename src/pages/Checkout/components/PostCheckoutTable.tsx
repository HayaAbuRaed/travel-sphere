import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { formatDate } from "src/utils/search";
import styles from "../style.module.css";
import { PostCheckoutTableProps } from "../types";

const PostCheckoutTable: FC<PostCheckoutTableProps> = ({ details }) => {
  const {
    customerName,
    hotelName,
    roomNumber,
    totalCost,
    bookingStatus,
    paymentMethod,
    confirmationNumber,
    roomType,
    bookingDateTime,
  } = details;

  return (
    <Stack
      p={{ xs: 1, sm: 5 }}
      gap={1}
      alignItems="center"
      className={styles.tableContainer}
    >
      <Typography component="h1" variant="h5">
        Confirmation Details
      </Typography>

      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Customer Name</th>
            <td>{customerName}</td>
          </tr>
          <tr>
            <th>Hotel Name</th>
            <td>{hotelName}</td>
          </tr>
          <tr>
            <th>Room Type</th>
            <td>{roomType}</td>
          </tr>
          <tr>
            <th>Room Number</th>
            <td>{roomNumber}</td>
          </tr>
          <tr>
            <th>Total Cost</th>
            <td>{totalCost}</td>
          </tr>
          <tr>
            <th>Booking Status</th>
            <td>{bookingStatus}</td>
          </tr>
          <tr>
            <th>Booking Date</th>
            <td>{formatDate(new Date(bookingDateTime))}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>{paymentMethod}</td>
          </tr>
          <tr>
            <th>Confirmation Number</th>
            <td>{confirmationNumber}</td>
          </tr>
        </tbody>
      </table>

      <Button
        variant="contained"
        disableElevation
        onClick={() => window.print()}
        sx={{ textTransform: "none" }}
        className={styles.printButton}
      >
        Print Details
      </Button>
    </Stack>
  );
};

export default PostCheckoutTable;
