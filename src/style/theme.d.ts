import { AppThemeMixins } from "./types";

declare module "@mui/material" {
  interface Theme {
    mixins: AppThemeMixins;
  }
}
