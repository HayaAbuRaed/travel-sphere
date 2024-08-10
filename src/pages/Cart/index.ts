import routeHOC from "src/Routes/HOCs/routeHOC";
import Cart from "./Cart";

export default routeHOC({
  title: "Cart",
  pageAccessName: "Cart",
})(Cart);
