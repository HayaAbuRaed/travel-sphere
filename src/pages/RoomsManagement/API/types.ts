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

export interface CreateRoomRequest {
  hotelId: number;
  roomNumber: string;
  cost: number;
}

export interface CreateRoomResponse {
  id: number;
  roomNumber: string;
  cost: number;
}
