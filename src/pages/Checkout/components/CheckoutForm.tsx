import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import { Autocomplete, Stack } from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC } from "react";
import TextField from "src/components/Fields/TextField";
import { RoomResponse } from "src/types/room";
import useAddBookingForm from "../hooks/useAddBookingForm";
import { PaymentType } from "../types";

export interface CheckoutFormProps {
  room: RoomResponse;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ room }) => {
  const { formikProps } = useAddBookingForm(room);

  const { isValid, dirty, setFieldValue, values } = formikProps;

  const isCardFelidsDisabled = values.paymentMethod !== PaymentType.CREDIT_CARD;

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack gap={2} py={1}>
          <TextField
            name="fullName"
            label="Full Name"
            placeholder=" e.g. John Doe"
          />
          <TextField
            name="email"
            label="Email Address"
            placeholder=" e.g. john@example.com"
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            placeholder=" e.g. +1 234 567 8901"
          />
          <TextField
            name="address"
            label="Address"
            placeholder=" e.g. 1234 Elm Street, Springfield, IL 62701"
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              PaymentType.CASH,
              PaymentType.CREDIT_CARD,
              PaymentType.PAYPAL,
            ]}
            renderInput={(params) => (
              <TextField
                name="paymentMethod"
                {...params}
                label="Payment Method"
              />
            )}
            onChange={(_e, value) => {
              setFieldValue("paymentMethod", value);
            }}
          />
          <TextField
            name="cardNumber"
            label="Card Number"
            placeholder=" e.g. 1234 5678 9012 3456"
            disabled={isCardFelidsDisabled}
          />
          <TextField
            name="expiry"
            label="Expiry MM/YY"
            placeholder=" e.g. 12/23"
            disabled={isCardFelidsDisabled}
          />
          <TextField
            name="cvv"
            label="CVV"
            placeholder=" e.g. 123"
            disabled={isCardFelidsDisabled}
          />
          <TextField
            name="specialRequests"
            label="Special Requests or Remarks"
            placeholder=" e.g. Please provide extra towels and pillows"
            multiline
            rows={4}
          />
        </Stack>
        <LoadingButton
          type="submit"
          variant="contained"
          disableElevation
          startIcon={<CheckCircleOutline />}
          disabled={!isValid || !dirty}
          loading={false}
          color="success"
        >
          Confirm Booking
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default CheckoutForm;
