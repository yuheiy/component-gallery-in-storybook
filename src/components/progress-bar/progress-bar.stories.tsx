import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./progress-bar";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
