import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const simpleButtonMeta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    IsPrimary: {
      options: [true, false],
      control: "radio",
    },
    Text: {
      control: "text",
    },
    Size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    OnClick: {
      control: "function",
    },
  },
};

// Rendering Button and description on argument
export const SimpleButton: StoryObj<typeof Button> = {
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
  args: {
    IsPrimary: true,
    Text: "Button",
    Size: "medium",
    OnClick: () => console.log("Hello World"),
  },
};

export default simpleButtonMeta;
