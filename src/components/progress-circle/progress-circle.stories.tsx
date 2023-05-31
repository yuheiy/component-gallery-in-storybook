import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "./progress-circle";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/ProgressCircle",
  component: ProgressCircle,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
