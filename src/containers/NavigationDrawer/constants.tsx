import HotelIcon from "@mui/icons-material/KingBedRounded";
import CityIcon from "@mui/icons-material/LocationCityRounded";
import RoomIcon from "@mui/icons-material/ChairRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { NavItem } from "./types";

export const DRAWER_WIDTH = 260;

export const ADMIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    Icon: <HomeIcon />,
    href: "/me",
  },
  {
    label: "Cities Management",
    Icon: <CityIcon />,
    href: "/me/cities",
  },
  {
    label: "Hotels Management",
    Icon: <HotelIcon />,
    href: "/me/hotels",
  },
  {
    label: "Rooms Management",
    Icon: <RoomIcon />,
    href: "/me/rooms",
  },
];

export const USER_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    Icon: <HomeIcon />,
    href: "/me",
  },
  {
    label: "Search Hotels",
    Icon: <SearchIcon />,
    href: "/me/search",
  },
];
