import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
