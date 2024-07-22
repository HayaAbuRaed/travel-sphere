export interface LoginFormPayload {
  userName: string;
  password: string;
}

export interface JwtPayload {
  user_id: string;
  given_name: string;
  family_name: string;
  user_type: "Admin" | "User";
  exp: number;
}
