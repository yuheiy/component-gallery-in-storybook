import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./action-button";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Buttons/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
