import {
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC } from "react";
import { IMAGES_LIST_DATA } from "../constants";
import styles from "../style.module.css";
import { srcset } from "../utils";

const GallerySection: FC = () => {
  const xsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack gap={3} alignItems="center">
      <Typography component="div" variant="h5" textAlign="center">
        Visit our&nbsp;
        <Typography variant="h4" className={styles.highlight}>
          Customers Tour Gallery
        </Typography>
      </Typography>

      <ImageList
        cols={4}
        variant="quilted"
        rowHeight={xsScreen ? 101 : 161}
        sx={{ maxWidth: { xs: 300, sm: 500, md: 800 } }}
      >
        {IMAGES_LIST_DATA.map(({ img, cols, rows }, index) => (
          <ImageListItem key={img} cols={cols || 1} rows={rows || 1}>
            <img
              {...srcset(img, 121, rows, cols)}
              alt={`adventure-${index}`}
              loading="lazy"
              style={{ borderRadius: 16 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default GallerySection;
