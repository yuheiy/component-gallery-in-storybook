import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./menu";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Collections/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
