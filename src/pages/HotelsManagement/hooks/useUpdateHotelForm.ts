import { useFormik } from "formik";
import { HotelData } from "../types";
import useUpdateHotelAPI from "./useUpdateHotelAPI";
import { UpdateHotelRequest } from "../API/types";

const useUpdateHotelForm = (hotel: HotelData) => {
  const { updateHotel, isPending } = useUpdateHotelAPI();

  const handleSubmit = (values: UpdateHotelRequest) => {
    updateHotel(values);
  };

  const formikProps = useFormik({
    initialValues: {
      hotelId: hotel.id,
      name: hotel.name,
      description: hotel.description,
      hotelType: hotel.hotelType,
      starRating: hotel.starRating,
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    },
    onSubmit: handleSubmit,
  });

  return { formikProps, isUpdating: isPending };
};

export default useUpdateHotelForm;
