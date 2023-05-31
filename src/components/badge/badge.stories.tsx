import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
