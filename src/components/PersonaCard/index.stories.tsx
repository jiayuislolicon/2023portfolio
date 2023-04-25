import type { Meta, StoryObj } from "@storybook/react";
import PersonaCard from "./index";

const meta: Meta<typeof PersonaCard> = {
	component: PersonaCard,
};

export default meta;

type Story = StoryObj<typeof PersonaCard>;

export const Primary: Story = {
	args: {
		imgUrl: "/Group.svg",
		content: "asdf",
		title: "asdf",
		color: "greenBlue",
	},
	argTypes: {
		color: {
			options: ["greenBlue", "white"],
			control: { type: "radio" },
		},
	},
};
