import type { Meta, StoryObj } from "@storybook/react";
import { DateField } from "./date-field";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/DateField",
  component: DateField,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
