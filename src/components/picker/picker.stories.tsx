import type { Meta, StoryObj } from "@storybook/react";
import { Picker } from "./picker";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Picker/Picker",
  component: Picker,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Picker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
