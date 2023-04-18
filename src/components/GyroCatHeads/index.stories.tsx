import type { Meta, StoryObj } from "@storybook/react";
import GyroCatHeads from "./index";

const meta: Meta<typeof GyroCatHeads> = {
	component: GyroCatHeads,
};

export default meta;

type Story = StoryObj<typeof GyroCatHeads>;

export const Primary: Story = {
	render: () => <GyroCatHeads />,
};
