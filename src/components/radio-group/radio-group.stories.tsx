import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radio-group";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
