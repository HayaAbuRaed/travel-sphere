import { carouselResponsive } from "src/constants/carousel";
import styles from "./style.module.css";
import { ApexOptions } from "apexcharts";

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

export const areaChartOptions: ApexOptions = {
  chart: {
    height: 450,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};
