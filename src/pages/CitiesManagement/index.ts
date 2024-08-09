import routeHOC from "src/Routes/HOCs/routeHOC";
import CitiesManagement from "./CitiesManagement";

export default routeHOC({
  title: "Cities Management",
  pageAccessName: "Cities",
})(CitiesManagement);
