export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  userType: "Admin" | "User";
  authentication: string;
}
