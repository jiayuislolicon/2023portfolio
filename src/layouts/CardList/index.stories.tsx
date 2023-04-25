import type { Meta, StoryObj } from "@storybook/react";
import CardList from "./index";

const meta: Meta<typeof CardList> = {
	component: CardList,
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const Primary: Story = {
	args: {
		width: 1024,
	},
};
