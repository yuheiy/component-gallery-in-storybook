import type { Meta, StoryObj } from "@storybook/react";
import { RangeCalendar } from "./range-calendar";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/RangeCalendar",
  component: RangeCalendar,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof RangeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
