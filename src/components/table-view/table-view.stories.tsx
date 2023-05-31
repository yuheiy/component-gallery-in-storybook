import type { Meta, StoryObj } from "@storybook/react";
import { TableView } from "./table-view";
import thumbnail from "./thumbnail.svg";

const meta = {
  title: "Collections/TableView",
  component: TableView,
  tags: ["autodocs"],
  parameters: {
    gallery: {
      thumbnail,
    },
  },
} satisfies Meta<typeof TableView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
