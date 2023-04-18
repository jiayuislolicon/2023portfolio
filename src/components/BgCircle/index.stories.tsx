import type { Meta, StoryObj } from "@storybook/react";
import BgCircle from "./index";

const meta: Meta<typeof BgCircle> = {
	component: BgCircle,
};

export default meta;

type Story = StoryObj<typeof BgCircle>;

export const Primary: Story = {
	args: {
		round: false,
		color: "green-blue"
	}
};
