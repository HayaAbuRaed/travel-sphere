import BalconyIcon from "@mui/icons-material/Balcony";
import MiniBarIcon from "@mui/icons-material/BrunchDining";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import HikingIcon from "@mui/icons-material/Hiking";
import SpaIcon from "@mui/icons-material/HotTub";
import CityIcon from "@mui/icons-material/LocationCityRounded";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import { ReactElement } from "react";

export interface IconListItem {
  name: string;
  icon: ReactElement;
  keys?: string[];
}

export const IconsList: IconListItem[] = [
  {
    name: "wi-fi",
    icon: <WifiIcon fontSize="small" color="success" />,
    keys: ["wi-fi", "wifi", "internet"],
  },
  {
    name: "pool",
    icon: <PoolIcon fontSize="small" color="info" />,
    keys: ["pool", "swimming pool", "swimming"],
  },
  {
    name: "fitness center",
    icon: <FitnessCenterIcon fontSize="small" color="warning" />,
    keys: ["fitness center", "gym", "fitness"],
  },
  {
    name: "balcony",
    icon: <BalconyIcon fontSize="small" />,
    keys: ["balcony"],
  },
  {
    name: "mini-bar",
    icon: <MiniBarIcon fontSize="small" color="error" />,
    keys: ["mini-bar", "minibar"],
  },
  {
    name: "city",
    icon: <CityIcon fontSize="small" color="warning" />,
    keys: ["city"],
  },
  {
    name: "free breakfast",
    icon: <FreeBreakfastIcon fontSize="small" color="warning" />,
    keys: ["breakfast", "free breakfast"],
  },
  {
    name: "hiking",
    icon: <HikingIcon fontSize="small" color="info" />,
    keys: ["hiking", "trekking"],
  },
  {
    name: "fireplace",
    icon: <FireplaceIcon fontSize="small" color="error" />,
    keys: ["fireplace"],
  },
  {
    name: "spa",
    icon: <SpaIcon fontSize="small" color="info" />,
    keys: ["spa"],
  },
];
