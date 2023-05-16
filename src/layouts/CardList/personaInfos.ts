type Info = {
	title: string;
	content: string;
	imgUrl: string;
	color: "white" | "greenBlue";
	className: string;
};

const personaInfos: Info[] = [
	{
		title: "Responsible",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "white",
		className: "col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 mb-[55px] lg:mb-0",
	},
	{
		title: "LOVE MOTION",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "white",
		className: "col-start-3 col-end-7 lg:col-start-7 lg:col-end-10 mb-[45px] lg:mb-0 lg:mt-24",
	},
	{
		title: "TECHNOLOGY",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "white",
		className: "col-start-2 col-end-6 lg:col-start-4 lg:col-end-7 mb-[45px] lg:mb-0",
	},
	{
		title: "LEARNING",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "greenBlue",
		className: "col-start-3 col-end-7 lg:col-start-9 lg:col-end-12 mb-[80px] lg:mb-0",
	},
	{
		title: "LOVE GAMING",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "greenBlue",
		className: "col-start-2 col-end-6 lg:col-start-2 lg:col-end-5 mb-[120px] lg:mb-0",
	},
	{
		title: "DIRECTION",
		content: "asdf",
		imgUrl: "/khaki.svg",
		color: "white",
		className: "col-start-3 col-end-7 lg:col-start-8 lg:col-end-11 mb-[120px] lg:mb-0 lg:mt-64",
	},
];

export default personaInfos;
