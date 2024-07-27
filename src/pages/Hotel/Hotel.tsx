import { Grid } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import HotelInfo from "./components/HotelInfo";

const Hotel: FC = () => {
  const { id: paramsId } = useParams();

  const id = parseInt(paramsId ?? "-1");

  return (
    <Grid container p={5}>
      <HotelInfo id={id} />
      <Gallery id={id} />
    </Grid>
  );
};

export default Hotel;
