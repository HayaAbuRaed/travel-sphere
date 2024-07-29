import { Grid, ImageList, ImageListItem, Skeleton } from "@mui/material";
import { FC } from "react";
import useGetHotelGallery from "../hooks/useGetHotelGallery";
import { GalleryProps } from "../types";
import { applyPattern, srcset } from "../utils";

const Gallery: FC<GalleryProps> = ({ id }) => {
  const { gallery, isFetching } = useGetHotelGallery(id);

  const enhancedGallery = applyPattern(gallery ?? Array.from({ length: 13 }));

  return (
    <Grid item xs={12} sm display="flex" justifyContent="center">
      <ImageList
        key={id}
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
        {enhancedGallery.map((photo, index) => (
          <ImageListItem
            key={photo.id ?? index}
            cols={photo.cols || 1}
            rows={photo.rows || 1}
          >
            {isFetching ? (
              <Skeleton
                variant="rectangular"
                sx={{
                  width: {
                    xs: 350 * (photo.cols / 6),
                    md: 520 * (photo.cols / 6),
                    lg: 720 * (photo.cols / 6),
                    xl: 780 * (photo.cols / 6),
                  },
                }}
                height={121 * photo.rows}
              />
            ) : (
              <img
                {...srcset(photo.url, 121, photo.rows, photo.cols)}
                alt={`photo${photo.id}`}
                loading="lazy"
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Gallery;
