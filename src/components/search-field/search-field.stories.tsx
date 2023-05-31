import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "./search-field";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
