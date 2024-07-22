export type UserType = "Admin" | "User";

export interface JwtPayload {
  user_id: string;
  given_name: string;
  family_name: string;
  user_type: UserType;
  exp: number;
}
