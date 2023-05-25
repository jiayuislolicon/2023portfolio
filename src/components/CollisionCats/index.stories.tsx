import type { Meta, StoryObj } from "@storybook/react";
import CollisionCats from "./index";

const meta: Meta<typeof CollisionCats> = {
	component: CollisionCats,
};

export default meta;

type Story = StoryObj<typeof CollisionCats>;

export const Primary: Story = {
	render: () => <CollisionCats />,
};
