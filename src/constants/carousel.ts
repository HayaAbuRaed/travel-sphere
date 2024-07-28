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
