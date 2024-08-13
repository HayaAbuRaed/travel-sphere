import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { formatDisplayDate } from "src/utils/search";
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

  const rows = [
    { label: "Customer Name", value: customerName },
    { label: "Hotel Name", value: hotelName },
    { label: "Room Type", value: roomType },
    { label: "Room Number", value: roomNumber },
    { label: "Total Cost", value: totalCost },
    { label: "Booking Status", value: bookingStatus },
    {
      label: "Booking Date",
      value: formatDisplayDate(new Date(bookingDateTime)),
    },
    { label: "Payment Method", value: paymentMethod },
    { label: "Confirmation Number", value: confirmationNumber },
  ];

  return (
    <Stack
      py={3}
      px={{ xs: 2, sm: 5 }}
      gap={3}
      bgcolor="#f5f5f5"
      alignItems="center"
      className={styles.container}
    >
      <Typography component="h1" variant="h5" fontWeight={600}>
        Confirmation Details
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 600, boxShadow: 3 }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell
                  component="th"
                  sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }}
                >
                  {row.label}
                </TableCell>
                <TableCell sx={{ width: "50%" }}>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
