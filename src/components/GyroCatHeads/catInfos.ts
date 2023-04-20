type TCatInfo = {
	sizeClass: string;
	position: string;
	type: "khaki" | "black" | "white";
};

const catInfos: TCatInfo[] = [
	{
		sizeClass: "w-[74vw] h-auto md:w-[36vw]",
		position: "bottom-[49.2%] md:bottom-[46%]",
		type: "khaki",
	},
	{
		sizeClass: "w-[79vw] h-auto md:w-[38vw]",
		position: "bottom-[25.2%]",
		type: "black",
	},
	{
		sizeClass: "w-[84vw] h-auto md:w-[42vw]",
		position: "bottom-[2%]",
		type: "white",
	},
];

export default catInfos;
