import { carouselResponsive } from "src/constants/carousel";
import styles from "./style.module.css";
import { GalleryPattern } from "./types";

export const HOTEL_QUERY_KEY = "hotel";

export const HOTEL_GALLERY_QUERY_KEY = "hotelGallery";

export const HOTEL_REVIEWS_QUERY_KEY = "hotelReviews";

export const HOTEL_ROOMS_QUERY_KEY = "hotelRooms";

export const GALLERY_GRID_PATTERN: GalleryPattern[] = [
  { rows: 2, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 4 },
  { rows: 1, cols: 3 },
  { rows: 1, cols: 3 },
  { rows: 1, cols: 4 },
  { rows: 2, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 2 },
  { rows: 1, cols: 3 },
];

const roomsCarouselResponsive = {
  ...carouselResponsive,
  largeDesktop: {
    ...carouselResponsive.largeDesktop,
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  desktop: {
    ...carouselResponsive.desktop,
    breakpoint: { max: 1440, min: 1024 },
  },
};

export const roomsCarouselProps = {
  responsive: roomsCarouselResponsive,
  containerClass: styles.carousel,
  itemClass: styles.carouselItem,
  infinite: false,
};
