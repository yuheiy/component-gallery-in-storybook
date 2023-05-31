import type { Meta, StoryObj } from "@storybook/react";
import { TimeField } from "./time-field";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/TimeField",
  component: TimeField,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof TimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
