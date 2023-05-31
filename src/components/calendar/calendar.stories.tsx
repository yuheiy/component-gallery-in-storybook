import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Date and time/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
