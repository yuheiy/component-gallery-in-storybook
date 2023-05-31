import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
