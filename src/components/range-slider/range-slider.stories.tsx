import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "./range-slider";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
