export interface MobileNavMenuProps {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export enum MenuName {
  USER,
  NAV,
}
