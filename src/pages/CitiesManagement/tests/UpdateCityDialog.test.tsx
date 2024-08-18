import {
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import render from "src/tests/render";
import { getters, MockedDialog, sampleCity } from "./fixtuers";
// import UpdateCityDialog from "../components/UpdateCityDialog";

describe("CitiesManagement/UpdateCityDialog", () => {
  beforeEach(() => {
    render(
      //   <UpdateCityDialog city={sampleCity} open={true} onClose={() => {}} />
      <MockedDialog />
    );
  });

  it("should render the update city dialog correctly", () => {
    const title = getters.getTitle();
    const nameInput = getters.getNameInput();
    const descriptionInput = getters.getDescriptionInput();

    expect(title).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  it("should have the correct values in the input fields", () => {
    const nameInput = getters.getNameInput();
    const descriptionInput = getters.getDescriptionInput();

    expect(nameInput).toHaveValue(sampleCity.name);
    expect(descriptionInput).toHaveValue(sampleCity.description);
  });

  it("should have the update button disabled by default and if the data fields is empty not changed", async () => {
    const updateButton = screen.getByRole("button", { name: /update/i });
    expect(updateButton).toBeDisabled();

    const nameInput = getters.getNameInput();
    const descriptionInput = getters.getDescriptionInput();

    await userEvent.clear(nameInput);
    await userEvent.clear(descriptionInput);
    expect(updateButton).toBeDisabled();

    await userEvent.type(nameInput, sampleCity.name);
    await userEvent.type(descriptionInput, sampleCity.description);
    expect(updateButton).toBeDisabled();
  });

  it("should enable the update button when the form data changes", async () => {
    const updateButton = screen.getByRole("button", { name: /update/i });
    const nameInput = getters.getNameInput();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Nablus");
    expect(updateButton).toBeEnabled();
  });

  it("should close the dialog when the close button is clicked", async () => {
    const closeButton = within(getters.getTitle()).getByRole("button");
    await userEvent.click(closeButton);

    const title = screen.queryByRole("heading", { name: /update city/i });
    await waitForElementToBeRemoved(title);
    expect(title).not.toBeInTheDocument();
  });
});
