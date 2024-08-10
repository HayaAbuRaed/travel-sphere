import { ReactElement } from "react";

export interface NavigationDrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export interface NavItem {
  label: string;
  Icon: ReactElement;
  href: string;
}
