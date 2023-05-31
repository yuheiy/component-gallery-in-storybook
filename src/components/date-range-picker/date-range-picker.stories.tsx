import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "./date-range-picker";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
