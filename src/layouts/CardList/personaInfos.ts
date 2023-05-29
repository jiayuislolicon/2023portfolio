type Info = {
	title: string;
	content: string;
	color: "white" | "greenBlue";
	className: string;
};

const personaInfos: Info[] = [
	{
		title: "Responsible",
		content: "充滿責任心完成專案是一件很重要的事",
		color: "white",
		className: "col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 mb-[55px] lg:mb-0",
	},
	{
		title: "LOVE MOTION",
		content: "喜歡製作有趣且動感的互動體驗",
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
		content: "正在學習搭配 MongoDB 的後端專案與理解 GLSL",
		color: "greenBlue",
		className: "col-start-3 col-end-7 lg:col-start-9 lg:col-end-12 mb-[80px] lg:mb-0",
	},
	{
		title: "LOVE GAME",
		content: "玩遊戲大多是我閒暇時的娛樂，也能思考如何加入專案中",
		color: "greenBlue",
		className: "col-start-2 col-end-6 lg:col-start-2 lg:col-end-5 mb-[120px] lg:mb-0",
	},
	{
		title: "DIRECTION",
		content: "希望可以找到志同道合的團隊可以一起執行專案",
		color: "white",
		className: "col-start-3 col-end-7 lg:col-start-8 lg:col-end-11 mb-[120px] lg:mb-0 lg:mt-64",
	},
];

export default personaInfos;
