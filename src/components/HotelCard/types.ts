import { PropsWithChildren, ReactNode } from "react";

export interface HotelCardProps extends PropsWithChildren {
  action?: () => void;
  hotel: Hotel;
}

export interface HeadingProps {
  subtitle?: ReactNode;
}

export interface InfoCardProps {
  hideCity?: true;
  showHotel?: true;
  showPrice?: true;
}

export interface InfoRecordProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  show: boolean;
}

export interface Hotel {
  hotelId: number;
  hotelName: string;
  cityName: string;
  starRating: number;
  discount: number;
  photoUrl: string;
  description?: string;
  priceLowBound?: number;
  priceHighBound?: number;
  title?: string;
  originalRoomPrice?: number;
}
