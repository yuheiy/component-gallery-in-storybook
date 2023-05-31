import type { Meta, StoryObj } from "@storybook/react";
import { ContextualHelp } from "./contextual-help";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Overlays/ContextualHelp",
  component: ContextualHelp,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ContextualHelp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
