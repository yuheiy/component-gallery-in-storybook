import type { Meta, StoryObj } from "@storybook/react";
import { TagGroup } from "./tag-group";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Collections/TagGroup",
  component: TagGroup,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
