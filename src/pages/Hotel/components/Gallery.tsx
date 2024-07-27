import { Grid, ImageList, ImageListItem } from "@mui/material";
import { FC } from "react";
import useGetHotelGallery from "../hooks/useGetHotelGallery";
import { GalleryProps } from "../types";
import { applyPattern } from "../utils";

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Gallery: FC<GalleryProps> = ({ id }) => {
  const { gallery, isFetching } = useGetHotelGallery(id);

  if (isFetching) return <div>Loading...</div>;

  if (!gallery) return null;

  const enhancedGallery = applyPattern(gallery);

  return (
    <Grid item xs={12} sm display="flex" justifyContent="center">
      <ImageList
        variant="quilted"
        cols={6}
        rowHeight={121}
        sx={{
          maxWidth: { md: 600, lg: 800 },
          width: "fit-content",
          height: "fit-content",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {enhancedGallery.map((photo) => (
          <ImageListItem
            key={photo.url}
            cols={photo.cols || 1}
            rows={photo.rows || 1}
          >
            <img
              {...srcset(photo.url, 121, photo.rows, photo.cols)}
              alt={`photo${photo.id}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Gallery;
