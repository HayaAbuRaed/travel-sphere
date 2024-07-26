export interface UserState {
  userId: string;
  givenName: string;
  familyName: string;
  userType: "Admin" | "User" | "";
  expirationDate: number;
  isAuthenticated: boolean;
}

export interface LoginPayload extends Omit<UserState, "isAuthenticated"> {
  // userType: "Admin" | "User";
}
