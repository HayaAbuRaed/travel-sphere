import { carouselResponsive } from "src/constants/carousel";
import styles from "./style.module.css";

export const FEATURED_DEALS_QUERY_KEY = "featuredDeals";

export const RECENTLY_VISITED_QUERY_KEY = "recentlyVisited";

export const TRENDING_DESTINATIONS_QUERY_KEY = "trendingDestinations";

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

export const recentlyVisitedCarouselProps = {
  responsive: carouselResponsive,
  containerClass: styles.carousel,
  itemClass: styles.carouselItem,
  showDots: true,
  partialVisible: true,
  removeArrowOnDeviceType: ["tablet", "mobile"],
  renderDotsOutside: true,
  infinite: false,
};
