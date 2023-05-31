import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./date-picker";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
