import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface MobileNavMenuProps {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export enum MenuName {
  USER,
  NAV,
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface NavbarProps {
  isSideBarOpen: boolean;
  handleOpenSideBar: () => void;
}
