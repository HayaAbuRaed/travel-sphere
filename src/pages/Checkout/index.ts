import routeHOC from "src/Routes/HOCs/routeHOC";
import Checkout from "./Checkout";

export default routeHOC({
  title: "Checkout",
  pageAccessName: "Checkout",
})(Checkout);
