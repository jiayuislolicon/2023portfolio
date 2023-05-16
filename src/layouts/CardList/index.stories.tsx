import type { Meta, StoryObj } from "@storybook/react";
import CardList from "./index";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

const meta: Meta<typeof CardList> = {
	component: CardList,
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const Primary: Story = {
	render: () => (
		<ReactLenis root>
			<CardList width={1024} />
		</ReactLenis>
	),
};
