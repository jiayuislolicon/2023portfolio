import type { Meta, StoryObj } from "@storybook/react";
import ContactMouse from "./index";

const meta: Meta<typeof ContactMouse> = {
	component: ContactMouse,
};

export default meta;

type Story = StoryObj<typeof ContactMouse>;

export const Primary: Story = {
	args: {
		type: "email",
		visible: true,
	},
	argTypes: {
		type: {
			options: ["email", "wave"],
			control: { type: "radio" },
		},
	},
};
