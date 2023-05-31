import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
