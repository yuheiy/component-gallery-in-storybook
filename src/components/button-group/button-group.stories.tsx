import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./button-group";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
