import styles from "./style.module.css";

export const FEATURED_DEALS_QUERY_KEY = "featuredDeals";

export const RECENTLY_VISITED_QUERY_KEY = "recentlyVisited";

export const TRENDING_DESTINATIONS_QUERY_KEY = "trendingDestinations";

export const carouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  smallTablet: {
    breakpoint: { max: 650, min: 464 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

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
