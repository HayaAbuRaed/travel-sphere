import { useFormik } from "formik";
import { removeFromCart } from "src/features/cart/cartSlice";
import { useAppDispatch } from "src/store/hooks";
import { RoomResponse } from "src/types/room";
import { INITIAL_VALUES } from "../constants";
import { CheckoutFormValues } from "../types";
import { validationSchema } from "./../schema";
import useAddBookingAPI from "./useAddBookingAPI";

const useAddBookingForm = (room: RoomResponse) => {
  const dispatch = useAppDispatch();
  const { addNewBooking, isPending } = useAddBookingAPI();

  const { roomId, roomType, roomNumber, price } = room;

  const submitForm = async (values: CheckoutFormValues) => {
    const response = await addNewBooking({
      customerName: values.fullName,
      hotelName: roomType,
      roomNumber: roomNumber,
      roomType: roomType,
      bookingDateTime: new Date().toISOString(),
      totalCost: price,
      paymentMethod: values.paymentMethod,
    });
    sessionStorage.setItem(
      `bookingResponse${roomId}`,
      JSON.stringify(response)
    );
    dispatch(removeFromCart(roomId));
    return response;
  };

  const formikProps = useFormik<CheckoutFormValues>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: submitForm,
  });

  return { formikProps, isBooking: isPending };
};

export default useAddBookingForm;
