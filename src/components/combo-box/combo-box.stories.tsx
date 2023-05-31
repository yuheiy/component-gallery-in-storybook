import type { Meta, StoryObj } from "@storybook/react";
import { ComboBox } from "./combo-box";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Picker/ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
