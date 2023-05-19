type Info = {
	title: string;
	content: string;
	color: "white" | "greenBlue";
	className: string;
};

const personaInfos: Info[] = [
	{
		title: "Responsible",
		content: "充滿責任感地完成專案",
		color: "white",
		className: "col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 mb-[55px] lg:mb-0",
	},
	{
		title: "LOVE MOTION",
		content: "喜歡創作充滿動感的頁面體驗",
		color: "white",
		className: "col-start-3 col-end-7 lg:col-start-7 lg:col-end-10 mb-[45px] lg:mb-0 lg:mt-24",
	},
	{
		title: "TECHNOLOGY",
		content: "主要使用 React、Next 做開發，以及使用 Three.js 做互動",
		color: "white",
		className: "col-start-2 col-end-6 lg:col-start-4 lg:col-end-7 mb-[45px] lg:mb-0",
	},
	{
		title: "LEARNING",
		content: "正在學習搭配 MongoDB 的後端專案與撰寫 GLSL",
		color: "greenBlue",
		className: "col-start-3 col-end-7 lg:col-start-9 lg:col-end-12 mb-[80px] lg:mb-0",
	},
	{
		title: "LOVE GAME",
		content: "網遊與音遊大多是我閒暇時的娛樂",
		color: "greenBlue",
		className: "col-start-2 col-end-6 lg:col-start-2 lg:col-end-5 mb-[120px] lg:mb-0",
	},
	{
		title: "DIRECTION",
		content: "依然還在尋找未來方向",
		color: "white",
		className: "col-start-3 col-end-7 lg:col-start-8 lg:col-end-11 mb-[120px] lg:mb-0 lg:mt-64",
	},
];

export default personaInfos;
