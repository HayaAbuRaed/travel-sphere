import routeHOC from "src/Routes/HOCs/routeHOC";
import RoomsManagement from "./RoomsManagement";

export default routeHOC({
  title: "Rooms Management",
  pageAccessName: "Rooms",
})(RoomsManagement);
