type TCatInfo = {
	sizeClass: string;
	position: string;
	type: "khaki" | "black" | "white";
};

const catInfos: TCatInfo[] = [
	{
		sizeClass: "w-[50vw] h-auto md:w-[36vw]",
		position: "bottom-[45%] md:bottom-[40%]",
		type: "khaki",
	},
	{
		sizeClass: "w-[60vw] h-auto md:w-[38vw]",
		position: "bottom-[25.2%] md:bottom-[23%]",
		type: "black",
	},
	{
		sizeClass: "w-[70vw] h-auto md:w-[42vw]",
		position: "bottom-[2%]",
		type: "white",
	},
];

export default catInfos;
