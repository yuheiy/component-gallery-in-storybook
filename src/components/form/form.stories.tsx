import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./form";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
