import type { Meta, StoryObj } from "@storybook/react";
import { StatusLight } from "./status-light";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/StatusLight",
  component: StatusLight,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof StatusLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
