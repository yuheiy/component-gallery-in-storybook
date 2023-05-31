import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./checkbox-group";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
