import type { Meta, StoryObj } from "@storybook/react";
import HorCatHeads from "./index";

const meta: Meta<typeof HorCatHeads> = {
	component: HorCatHeads,
};

export default meta;

type Story = StoryObj<typeof HorCatHeads>;

export const Primary: Story = {
	render: () => <HorCatHeads />,
};
