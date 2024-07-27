export interface HotelResponse {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
}

export interface Amenity {
  name: string;
  description: string;
}

export interface PhotoResponse {
  id: number;
  url: string;
}

export interface ReviewResponse {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}
