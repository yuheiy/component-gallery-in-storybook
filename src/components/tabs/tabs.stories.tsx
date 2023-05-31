import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
