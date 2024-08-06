import { City } from "./API/types";

export const createData = (id: number, name: string, description: string) => ({
  id,
  name,
  description,
});

export const getTableRows = (cities: City[]) => {
  return cities.map((city) => createData(city.id, city.name, city.description));
};
