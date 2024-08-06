import routeHOC from "src/Routes/HOCs/routeHOC";
import Home from "./Home";

export default routeHOC({
  title: "Home",
  pageAccessName: "Home",
})(Home);
