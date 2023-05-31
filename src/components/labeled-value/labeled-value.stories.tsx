import type { Meta, StoryObj } from "@storybook/react";
import { LabeledValue } from "./labeled-value";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Status/LabeledValue",
  component: LabeledValue,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof LabeledValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
