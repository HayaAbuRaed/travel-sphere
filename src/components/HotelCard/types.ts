import { PropsWithChildren, ReactNode } from "react";

export interface HotelCardProps extends PropsWithChildren {
  action?: () => void;
  hotel: Hotel;
  horizontal?: true;
}

export interface HeadingProps {
  subtitle?: ReactNode;
}

export interface InfoCardProps {
  hideCity?: true;
  showHotel?: true;
  showPrice?: true;
  singlePriceBound?: true;
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
  discount?: number;
  photoUrl: string;
  description?: string;
  priceLowerBound?: number;
  priceUpperBound?: number;
  title?: string;
  originalRoomPrice?: number;
}
