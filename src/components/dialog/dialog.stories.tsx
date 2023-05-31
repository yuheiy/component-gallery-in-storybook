import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
