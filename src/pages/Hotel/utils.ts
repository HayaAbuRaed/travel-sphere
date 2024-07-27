import { PhotoResponse } from "./API/types";
import { GALLERY_GRID_PATTERN } from "./constants";

export const applyPattern = (targetArray: PhotoResponse[]) => {
  const pattern = GALLERY_GRID_PATTERN;

  const x = targetArray.map((item, index) => ({
    ...item,
    rows: pattern[index % pattern.length].rows,
    cols: pattern[index % pattern.length].cols,
  }));

  return x;
};
