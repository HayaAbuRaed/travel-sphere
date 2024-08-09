import { PageAccessName, PageAccessRight } from "src/types/accessControl";

export const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  ["SearchResults", { role: "User" }],
  ["Hotel", { role: "User" }],
  ["Cart", { role: "User" }],
  ["Checkout", { role: "User" }],
  ["Cities", { role: "Admin" }],
  ["Rooms", { role: "Admin" }],
  ["Hotels", { role: "Admin" }],
]);
