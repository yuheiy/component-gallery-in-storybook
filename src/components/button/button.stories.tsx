import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
