export interface UserState {
  userId: string;
  givenName: string;
  familyName: string;
  userType: "Admin" | "User" | "";
  expirationDate: Date | null;
  isAuthenticated: boolean;
}

export interface LoginPayload
  extends Omit<UserState, "isAuthenticated" | "userType"> {
  userType: "Admin" | "User";
}
