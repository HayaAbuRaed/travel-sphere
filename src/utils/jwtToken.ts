import { jwtDecode } from "jwt-decode";
import { LoginPayload } from "src/features/user/types";
import { JwtPayload } from "src/types/authentication";

export const getJwtData = (token: string): LoginPayload => {
  const tokenPayload = jwtDecode<JwtPayload>(token);

  const { user_id, given_name, family_name, userType, exp } = tokenPayload;

  return {
    userId: user_id,
    givenName: given_name,
    familyName: family_name,
    userType: userType,
    expirationDate: exp,
  };
};

const convertExpDate = (expDate: number) => {
  return new Date(expDate * 1000);
};

export const checkTokenExpiration = (expDate: number | Date) => {
  if (typeof expDate === "number") {
    expDate = convertExpDate(expDate);
  }

  const currentDate = new Date();

  return expDate <= currentDate;
};
