import type { Meta, StoryObj } from "@storybook/react";
import { NumberField } from "./number-field";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
