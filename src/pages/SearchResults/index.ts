import routeHOC from "src/Routes/HOCs/routeHOC";
import SearchResults from "./SearchResults";

export default routeHOC({
  title: "Search Results",
  pageAccessName: "SearchResults",
})(SearchResults);
