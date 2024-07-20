import { createTheme } from "@mui/material";
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
  },
  typography: {
    fontFamily: "Sora, sans-serif",
  },
});

export default travelSphereTheme;
