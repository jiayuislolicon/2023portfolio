import type { Meta, StoryObj } from "@storybook/react";
import FishesScene from "./index";

const meta: Meta<typeof FishesScene> = {
	component: FishesScene,
};

export default meta;

type Story = StoryObj<typeof FishesScene>;

export const Primary: Story = {
	args: {
		visible: false,
	},
};
