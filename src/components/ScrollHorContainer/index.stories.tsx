import type { Meta, StoryObj } from "@storybook/react";
import ScrollHorContainer from "./index";

const meta: Meta<typeof ScrollHorContainer> = {
	component: ScrollHorContainer,
};

export default meta;

type Story = StoryObj<typeof ScrollHorContainer>;

export const Primary: Story = {
	render: () => (
		<ScrollHorContainer>
			<div className='min-w-[50vw] min-h-[100vh] flex justify-center items-center'>asdf</div>
			<div className='min-w-[50vw] min-h-[100vh] flex justify-center items-center'>asdf</div>
			<div className='min-w-[50vw] min-h-[100vh] flex justify-center items-center'>asdf</div>
		</ScrollHorContainer>
	),
};
