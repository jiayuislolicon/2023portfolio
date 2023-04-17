// .storybook/main.ts

import { mergeConfig } from "vite";

const config = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	core: {
		builder: "@storybook/builder-vite",
	},
	framework: { name: "@storybook/react-vite", options: { fastRefresh: true } },
	async viteFinal(config, options) {
		return mergeConfig(config, {
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ["storybook-dark-mode"],
			},
		});
	},
};

export default config;
