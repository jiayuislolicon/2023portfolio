import type { Meta, StoryObj } from "@storybook/react";
import YarnScene from "./index";

const meta: Meta<typeof YarnScene> = {
	component: YarnScene,
};

export default meta;

type Story = StoryObj<typeof YarnScene>;

export const Primary: Story = {
	args: { visible: false },
};
