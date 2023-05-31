import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./text-area";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
