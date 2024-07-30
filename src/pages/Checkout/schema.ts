import * as Yub from "yup";
import { CheckoutFormValues } from "./types";

const cardNumberRegex = /^[0-9]{16}$/;
const cvvRegex = /^[0-9]{3}$/;
const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
const phoneNumberRegex = /^[0-9+]{1,15}$/;

const todayMonth = new Date().getMonth() + 1;
const todayYear = new Date().getFullYear() % 100;

export const validationSchema = Yub.object<CheckoutFormValues>({
  fullName: Yub.string().required("Full Name is required"),
  email: Yub.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yub.string()
    .matches(phoneNumberRegex, "Invalid phone number")
    .required("Phone Number is required"),
  address: Yub.string().required("Address is required"),
  paymentMethod: Yub.string().required("Payment Method is required"),
  cardNumber: Yub.string()
    .matches(cardNumberRegex, "Invalid card number")
    .when("paymentMethod", {
      is: "credit-card",
      then: (schema) => schema.required("Card Number is required"),
    }),
  expiry: Yub.string()
    .matches(expiryRegex, "Invalid expiry date")
    .when("paymentMethod", {
      is: "credit-card",
      then: (schema) =>
        schema
          .test("expiry", "Invalid expiry date", (value) => {
            if (!value) {
              return false;
            }
            const [month, year] = value.split("/");
            if (parseInt(year) < todayYear) {
              return false;
            }
            if (parseInt(year) === todayYear && parseInt(month) < todayMonth) {
              return false;
            }
            return true;
          })
          .required("Expiry is required"),
    }),
  cvv: Yub.string()
    .matches(cvvRegex, "Invalid CVV")
    .when("paymentMethod", {
      is: "credit-card",
      then: (schema) => schema.required("CVV is required"),
    }),
  specialRequests: Yub.string(),
});
