import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
