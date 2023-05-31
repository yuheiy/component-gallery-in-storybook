import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./toggle-button";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
