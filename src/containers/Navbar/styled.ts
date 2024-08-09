import styled from "@emotion/styled";
import { Badge, BadgeProps } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import theme from "src/style/travelSphereTheme";
import { DRAWER_WIDTH } from "../NavigationDrawer/constants";
import { AppBarProps } from "./types";

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    border: "1px solid #fafafa",
    padding: 0,
    fontSize: "10px",
  },
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
