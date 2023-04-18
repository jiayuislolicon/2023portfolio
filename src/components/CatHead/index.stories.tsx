import type { Meta, StoryObj } from "@storybook/react";
import CatHead from "./index";

const meta: Meta<typeof CatHead> = {
	component: CatHead,
};

export default meta;

type Story = StoryObj<typeof CatHead>;

export const Primary: Story = {
	args: {
		mouseX: 0,
		mouseY: 0,
		isMobile: false,
		type: "black",
	},
	argTypes: {
		type: {
			options: ["black", "khaki", "white"],
			control: { type: "radio" },
		},
		mouseX: {
			control: { type: "range", min: -10, max: 10, step: 0.1 },
		},
		mouseY: {
			control: { type: "range", min: -10, max: 10, step: 0.1 },
		},
	},
};
