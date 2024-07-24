export interface SearchRequest {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  numberOfRooms: number;
  adults: number;
  children: number;
  starRate?: number;
  sort?: string;
}

export interface SearchResponse {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
}

export interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface FormikSearchPayload
  extends Omit<SearchRequest, "checkInDate" | "checkOutDate"> {
  dateRange: DateRange;
}
