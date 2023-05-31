import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
