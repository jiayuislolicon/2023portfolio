import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./index";

const meta: Meta<typeof IconButton> = {
	component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
	args: {
		url: "",
		type: "email",
	},
};
