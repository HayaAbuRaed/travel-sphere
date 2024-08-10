import routeHOC from "src/Routes/HOCs/routeHOC";
import Hotel from "./Hotel";

export default routeHOC({
  title: "Hotel",
  pageAccessName: "Hotel",
})(Hotel);
