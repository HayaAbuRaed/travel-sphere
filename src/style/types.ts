import { MixinsOptions } from "@mui/material/styles/createMixins";

export interface ThemeMixins extends MixinsOptions {
  // eslint-disable-next-line @typescript-eslint/ban-types
  niceScroll: (width?: number) => {};
}
