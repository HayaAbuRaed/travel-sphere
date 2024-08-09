import { createTheme } from "@mui/material/styles";
import travelSphereMixins from "./mixins";

const travelSphereTheme = createTheme({
  mixins: travelSphereMixins,
  palette: {
    primary: {
      main: "#ffeb3b",
    },
    secondary: {
      main: "#faa935",
    },
    background: {
      paper: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Sora, sans-serif",
  },
  transitions: {
    easing: {
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

export default travelSphereTheme;
