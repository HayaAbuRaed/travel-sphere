import { ReactNode } from "react";

export interface RoomRow {
  id: number;
  number: number;
  type: string;
  "# adults": number;
  "# children": number;
  "available?": string;
  "price ($)": number;
  photo: ReactNode;
  amenities: ReactNode;
}

export interface FilterConfigState {
  key: keyof RoomRow;
  value: string;
}
