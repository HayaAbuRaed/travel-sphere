import { Grid } from "@mui/material";
import { FC } from "react";
import SearchResultsContextProvider from "../context/SearchResultsContextProvider";
import Filters from "./Filters";
import ResultsList from "./ResultsList";

const ResultsSection: FC = () => {
  return (
    <SearchResultsContextProvider>
      <Grid item container maxWidth={1000} px={3} gap={5}>
        <Grid item container xs={12} md={3.75} justifyContent="center">
          <Filters />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm
          maxWidth={{ md: 700 }}
          justifyContent="center"
        >
          <ResultsList />
        </Grid>
      </Grid>
    </SearchResultsContextProvider>
  );
};

export default ResultsSection;
