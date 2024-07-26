import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Description from "./components/Description";
import DiscountChip from "./components/DiscountChip";
import Heading from "./components/Heading";
import Rating from "./components/HotelRating";
import InfoCard from "./components/InfoCard";
import PriceSegment from "./components/PriceSegment";
import HotelCardContext from "./context/HotelCardContext";
import { HotelCardProps } from "./types";

const HotelCard = ({ children, hotel, action }: HotelCardProps) => {
  return (
    <HotelCardContext.Provider value={hotel}>
      <Card variant="outlined" sx={{ maxWidth: "450px", position: "relative" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={hotel.photoUrl}
          title={hotel.hotelName}
        />

        <CardContent>{children}</CardContent>

        {action && (
          <CardActions sx={{ justifyContent: "center", pt: 0 }}>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              disableElevation
              fullWidth
              sx={{
                maxWidth: "225px",
                textTransform: "capitalize",
                borderRadius: 5,
                color: "#fafafa",
              }}
              onClick={action}
            >
              Book now
            </Button>
          </CardActions>
        )}
      </Card>
    </HotelCardContext.Provider>
  );
};

export default HotelCard;

HotelCard.DiscountChip = DiscountChip;
HotelCard.InfoCard = InfoCard;
HotelCard.Heading = Heading;
HotelCard.Description = Description;
HotelCard.Rating = Rating;
HotelCard.PriceSegment = PriceSegment;
