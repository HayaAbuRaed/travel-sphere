import routeHOC from "src/Routes/HOCs/routeHOC";
import HotelsManagement from "./HotelsManagement";

export default routeHOC({
  title: "Hotels Management",
  pageAccessName: "Hotels",
})(HotelsManagement);
