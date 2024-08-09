export interface City {
  id: number;
  name: string;
  description: string;
}

export interface AddCityRequest {
  name: string;
  description: string;
}

export interface UpdateCityRequest extends AddCityRequest {
  id: number;
}
