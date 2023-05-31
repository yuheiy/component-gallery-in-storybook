import type { Meta, StoryObj } from "@storybook/react";
import { ListView } from "./list-view";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Collections/ListView",
  component: ListView,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof ListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
