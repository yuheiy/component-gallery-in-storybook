import type { Meta, StoryObj } from "@storybook/react";
import { ActionGroup } from "./action-group";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Buttons/ActionGroup",
  component: ActionGroup,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ActionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
