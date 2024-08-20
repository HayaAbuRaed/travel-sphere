import { Box, Stack } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import AmenityChip from "../../AmenityChip";
import HotelCardContext from "../context/HotelCardContext";
import HotelCard from "../HotelCard";
import { HotelCardProps } from "../types";
import { HOTEL } from "./data";

export default {
  title: "Components/HotelCard",
  component: HotelCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <HotelCardContext.Provider value={HOTEL}>
        <Story />
      </HotelCardContext.Provider>
    ),
  ],
  argTypes: {
    horizontal: { control: "boolean" },
    action: fn(),
  },
  args: {
    hotel: HOTEL,
  },
} as Meta<typeof HotelCard>;

export const Default: StoryFn<HotelCardProps> = (args) => (
  <HotelCard {...args}>
    <HotelCard.Rating />
    <HotelCard.PriceSegment />
    <HotelCard.Heading />
    <HotelCard.Description />
  </HotelCard>
);

export const WithAction: StoryFn<HotelCardProps> = (args) => (
  <HotelCard {...args}>
    <HotelCard.Rating />
    <HotelCard.PriceSegment />
    <HotelCard.Heading />
    <HotelCard.Description />
  </HotelCard>
);
WithAction.args = {
  action: () => fn(),
};
WithAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button", { name: /book now/i });
  await userEvent.click(button);
};

export const WithDiscountChip: StoryFn<HotelCardProps> = (args) => (
  <HotelCard {...args}>
    <HotelCard.Rating />
    <HotelCard.PriceSegment />
    <HotelCard.Heading />
    <HotelCard.DiscountChip />
    <HotelCard.Description />
  </HotelCard>
);
WithDiscountChip.args = {
  hotel: HOTEL,
};

export const WithInfoCard: StoryFn<HotelCardProps> = (args) => (
  <HotelCard {...args}>
    <HotelCard.Rating />
    <HotelCard.PriceSegment />
    <HotelCard.Heading />
    <HotelCard.Description />
    <HotelCard.InfoCard showHotel />
  </HotelCard>
);

export const HorizontalCard: StoryFn<HotelCardProps> = (args) => {
  return (
    <HotelCard {...args}>
      <HotelCard.Rating />
      <HotelCard.Heading />

      <Box pb={1}>
        <AmenityChip label={"Free Wifi"} />
      </Box>
      <HotelCard.InfoCard showHotel />
    </HotelCard>
  );
};
HorizontalCard.args = {
  horizontal: true,
};

export const FeaturedDealsCard: StoryFn<HotelCardProps> = (args) => (
  <HotelCard {...args}>
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
    >
      <HotelCard.Rating />
      <HotelCard.PriceSegment />
    </Stack>
    <HotelCard.Heading />
    <HotelCard.DiscountChip />
    <HotelCard.Description />
    <HotelCard.InfoCard showHotel />
  </HotelCard>
);
FeaturedDealsCard.args = {
  action: () => fn(),
};
