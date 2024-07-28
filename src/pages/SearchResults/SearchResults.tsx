import { Grid } from "@mui/material";
import { FC } from "react";
import SearchBar from "src/components/SearchBar";
import ResultsSection from "./components/ResultsSection";

const SearchResults: FC = () => {
  return (
    <Grid container rowGap={5} pt={4} pb={5}>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>

      <Grid item container xs={12} justifyContent="center">
        <ResultsSection />
      </Grid>
    </Grid>
  );
};

export default SearchResults;
