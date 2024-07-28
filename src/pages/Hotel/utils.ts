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

// mui implementation of image srcset
export const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};
