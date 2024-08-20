import { Meta, StoryObj } from "@storybook/react";
import InfoCard from "../components/InfoCard";
import HotelCardContext from "../context/HotelCardContext";
import { HOTEL } from "./data";

const meta = {
  title: "Components/HotelCard/InfoCard",
  component: InfoCard,
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
    showHotel: { control: "boolean" },
    showPrice: { control: "boolean" },
    singlePriceBound: { control: "boolean" },
    hideCity: { control: "boolean" },
  },
} as Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithHotel: Story = {
  args: {
    showHotel: true,
  },
};

export const WithPrice: Story = {
  args: {
    showPrice: true,
  },
};

export const WithSinglePriceBound: Story = {
  args: {
    singlePriceBound: true,
  },
};

export const WithAll: Story = {
  args: {
    showHotel: true,
    showPrice: true,
    singlePriceBound: true,
  },
};

export const WithCityHidden: Story = {
  args: {
    hideCity: true,
    showHotel: true,
    showPrice: true,
  },
};
