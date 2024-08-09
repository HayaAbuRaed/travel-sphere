import { LatLngExpression } from "leaflet";
import { ReactNode } from "react";
import { Hotel } from "./API/types";

export interface HotelData extends Hotel {
  location: ReactNode;
}

export interface MapProps {
  position: LatLngExpression;
}

export interface FilterConfigState {
  key: keyof Hotel;
  value: string;
}

export interface AddHotelDialogProps {
  open: boolean;
  onClose: () => void;
}

export interface UpdateHotelDialogProps {
  hotel: HotelData;
  open: boolean;
  onClose: () => void;
}
