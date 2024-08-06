import { PageAccessName, PageAccessRight } from "src/types/accessControl";

export const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  ["Home", { role: "User" }],
  ["SearchResults", { role: "User" }],
  ["Hotel", { role: "User" }],
  ["Cart", { role: "User" }],
  ["Checkout", { role: "User" }],
  ["Cities", { role: "Admin" }],
]);
