import type { Meta, StoryObj } from "@storybook/react";
import MainVisual from "./index";

const meta: Meta<typeof MainVisual> = {
	component: MainVisual,
};

export default meta;

type Story = StoryObj<typeof MainVisual>;

export const Primary: Story = {
	render: () => <MainVisual />,
};
