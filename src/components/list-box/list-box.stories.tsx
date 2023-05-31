import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./list-box";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Collections/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
