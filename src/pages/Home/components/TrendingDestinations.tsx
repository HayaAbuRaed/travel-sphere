import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Image, ImageBackdrop, ImageBox, ImageMarked } from "../styled";
import useGetTrendingDestinations from "../hook/useGetTrendingDestinations";
import Flag from "react-world-flags";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

// Initialize the countries library with the English locale
countries.registerLocale(enLocale);

const countryCode = (countryName: string) =>
  countries.getAlpha2Code(countryName, "en");

const TrendingDestinations: FC = () => {
  const { trendingDestinations, isFetching } = useGetTrendingDestinations();

  if (isFetching) return <div>Loading...</div>;

  if (!trendingDestinations) return <div>No data found</div>;

  console.log(trendingDestinations);

  return (
    <Grid
      item
      xs={12}
      px={{ xs: 3, md: 6 }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={1}
      sx={{ minWidth: 300 }}
    >
      {trendingDestinations.map(
        ({ cityId, cityName, thumbnailUrl, countryName }, index) => (
          <ImageBox
            key={cityId}
            style={{
              width: index === 0 ? "40%" : "30%",
            }}
          >
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <img
              src={thumbnailUrl}
              alt={cityName}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                fontWeight={600}
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  transition: "0.2s",
                }}
              >
                <Flag code={countryCode(countryName)} height="16" />
                &nbsp;
                {cityName}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageBox>
        )
      )}
    </Grid>
  );
};

export default TrendingDestinations;
