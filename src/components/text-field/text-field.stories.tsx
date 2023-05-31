import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
