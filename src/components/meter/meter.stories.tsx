import type { Meta, StoryObj } from "@storybook/react";
import { Meter } from "./meter";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/Meter",
  component: Meter,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
