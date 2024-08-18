import { useState } from "react";
import { City } from "../API/types";
import { screen } from "@testing-library/react";
import UpdateCityDialog from "../components/UpdateCityDialog";

export const sampleCity: City = {
  id: 1,
  name: "New York",
  description: "The city that never sleeps",
};

export const getters = {
  getTitle: () => screen.getByRole("heading", { name: /update city/i }),
  getNameInput: () => screen.getByRole("textbox", { name: /name/i }),
  getDescriptionInput: () =>
    screen.getByRole("textbox", { name: /description/i }),
  getUpdateButton: () => screen.getByRole("button", { name: /update/i }),
};

export const MockedDialog = () => {
  const [open, setOpen] = useState(true);

  return (
    <UpdateCityDialog
      city={sampleCity}
      open={open}
      onClose={() => setOpen(false)}
    />
  );
};
