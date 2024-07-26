import HotelIcon from "@mui/icons-material/BedOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid } from "@mui/material";
import { Form, FormikProvider } from "formik";
import { FC } from "react";
import DatePicker from "./components/DatePicker";
import FieldWrapper from "./components/FieldWrapper";
import RoomGuestSelector from "./components/RoomGuestSelector";
import useSearchForm from "./hooks/useSearchForm";
import { StyledTextField } from "./styled";
import styles from "./style.module.css";

const SearchBar: FC = () => {
  const { formikProps } = useSearchForm();

  const { isValid } = formikProps;

  return (
    <FormikProvider value={formikProps}>
      <Form className={styles.searchForm}>
        <Grid
          container
          sx={{ backgroundColor: "primary.main" }}
          maxWidth={{ xs: "600px", md: "1200px" }}
          className={styles.searchFieldsContainer}
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
            <LoadingButton
              type="submit"
              variant="contained"
              color="info"
              disableElevation
              startIcon={<SearchIcon />}
              fullWidth
              disabled={!isValid}
              sx={{
                textTransform: "none",
                ".MuiButton-startIcon": { mr: 0.35 },
                height: "100%",
              }}
            >
              Search
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default SearchBar;
