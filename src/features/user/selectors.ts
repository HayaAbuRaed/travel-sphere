import { RootState } from "src/store";

const selectUser = (state: RootState) => state.user;

export default selectUser;

export const selectUserType = (state: RootState) => state.user.userType;

export const selectIsUserAdmin = (state: RootState) =>
  state.user.userType === "Admin";
