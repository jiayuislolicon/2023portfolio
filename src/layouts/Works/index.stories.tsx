import type { Meta, StoryObj } from "@storybook/react";
import Works from "./index";

const meta: Meta<typeof Works> = {
	component: Works,
};

export default meta;

type Story = StoryObj<typeof Works>;

export const Primary: Story = {
	args: {
		width: 1024,
	},
};
