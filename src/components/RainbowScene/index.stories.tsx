import type { Meta, StoryObj } from "@storybook/react";
import RainbowScene from "./index";

const meta: Meta<typeof RainbowScene> = {
	component: RainbowScene,
};

export default meta;

type Story = StoryObj<typeof RainbowScene>;

export const Primary: Story = {
	args: {
		visible: true,
	},
};
