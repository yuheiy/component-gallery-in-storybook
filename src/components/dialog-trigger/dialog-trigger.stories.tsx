import type { Meta, StoryObj } from "@storybook/react";
import { DialogTrigger } from "./dialog-trigger";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Overlays/DialogTrigger",
  component: DialogTrigger,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof DialogTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
