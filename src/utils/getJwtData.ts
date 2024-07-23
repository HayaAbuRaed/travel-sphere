import { jwtDecode } from "jwt-decode";
import { LoginPayload } from "src/features/user/types";
import { JwtPayload } from "src/types/authentication";

const getJwtData = (token: string): LoginPayload => {
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

export default getJwtData;