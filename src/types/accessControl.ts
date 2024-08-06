import { UserType } from "./authentication";

export interface PageAccessRight {
  role: UserType;
}

export type PageAccessName =
  | "Home"
  | "SearchResults"
  | "Hotel"
  | "Cart"
  | "Checkout"
  | "Cities";
