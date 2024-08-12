import { carouselResponsive } from "src/constants/carousel";
import styles from "./style.module.css";

export const FEATURED_DEALS_QUERY_KEY = "featuredDeals";

export const featuredDealsCarouselProps = {
  responsive: carouselResponsive,
  containerClass: styles.carousel,
  itemClass: styles.carouselItem,
  showDots: true,
  infinite: true,
  partialVisible: true,
  autoPlay: true,
  autoPlaySpeed: 3000,
  removeArrowOnDeviceType: ["tablet", "mobile"],
  renderDotsOutside: true,
};
