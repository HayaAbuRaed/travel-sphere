import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import icon from "src/assets/icon.png";
import { ADMIN_NAV_ITEMS, DRAWER_WIDTH, USER_NAV_ITEMS } from "./constants";
import { NavigationDrawerProps } from "./types";
import { useAppSelector } from "src/store/hooks";
import { selectIsUserAdmin } from "src/features/user";

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  open,
  handleDrawerClose,
}) => {
  const isAdmin = useAppSelector(selectIsUserAdmin);

  const navItems = isAdmin ? ADMIN_NAV_ITEMS : USER_NAV_ITEMS;

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      open={open}
      onClose={handleDrawerClose}
    >
      <Typography
        variant="h6"
        component={Stack}
        direction="row"
        alignItems="center"
        gap={0.5}
        p={1}
        minHeight={65}
        borderBottom="1px solid #eee"
      >
        <Avatar src={icon} alt="TravelSphere" />
        TravelSphere
      </Typography>
      <List>
        {navItems.map(({ label, Icon, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ gap: 1 }} href={href}>
              <ListItemIcon sx={{ minWidth: 0 }}>{Icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
