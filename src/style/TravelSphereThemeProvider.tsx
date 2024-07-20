import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";
import travelSphereTheme from "./travelSphereTheme";

const TravelSphereThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={travelSphereTheme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default TravelSphereThemeProvider;
