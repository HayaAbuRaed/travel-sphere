import HotelIcon from "@mui/icons-material/BedOutlined";
import { Button, Grid } from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC } from "react";
import DatePicker from "./components/DatePicker";
import FieldWrapper from "./components/FieldWrapper";
import RoomGuestSelector from "./components/RoomGuestSelector";
import useSearchForm from "./hooks/useSearchForm";
import { StyledTextField } from "./styled";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const SearchBar: FC = () => {
  const { formikProps, searchResults } = useSearchForm();

  console.log(searchResults);

  return (
    <FormikProvider value={formikProps}>
      <Form style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{ backgroundColor: "primary.main" }}
          borderRadius={1}
          py={1}
          px={1.2}
          columnGap={1.5}
          rowGap={1}
          maxWidth={{ xs: "600px", md: "1200px" }}
        >
          <FieldWrapper md icon={<HotelIcon />}>
            <StyledTextField
              name="city"
              placeholder="where are you going..."
              fullWidth
            />
          </FieldWrapper>

          <DatePicker />

          <RoomGuestSelector />

          <Grid item xs={12} md={1.2} lg={1}>
            <Button
              type="submit"
              variant="contained"
              color="info"
              disableElevation
              startIcon={<SearchIcon />}
              fullWidth
              sx={{
                textTransform: "none",
                ".MuiButton-startIcon": { mr: 0.35 },
                height: "100%",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default SearchBar;
