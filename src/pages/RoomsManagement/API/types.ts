export interface GetRoomsRequest {
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
}

export interface Hotel {
  id: number;
  name: string;
  cityName: string;
  description?: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}
