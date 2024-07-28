import axios from "src/API/axios";
import { Amenity } from "src/types/search";

export const getSearchPageAmenities = async () => {
  const response = await axios.get<Amenity[]>("/search-results/amenities");

  return response.data;
};
