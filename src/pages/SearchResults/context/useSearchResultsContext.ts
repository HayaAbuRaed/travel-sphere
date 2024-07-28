import { useContext } from "react";
import SearchResultsContext from "./SearchResultsContext";

const useSearchResultsContext = () => {
  const context = useContext(SearchResultsContext);

  if (context === undefined) {
    throw new Error(
      "useSearchResultsContext must be used within a SearchResultsProvider"
    );
  }

  return context;
};

export default useSearchResultsContext;
