type TCatInfo = {
	size: number;
	position: number;
	padSize: number;
	type: "khaki" | "black" | "white";
};

const catInfos: TCatInfo[] = [
	{
		size: 74,
		padSize: 36,
		position: 49.2,
		type: "khaki",
	},
	{
		size: 79,
		padSize: 38,
		position: 25.2,
		type: "black",
	},
	{
		size: 84,
		padSize: 42,
		position: -2,
		type: "white",
	},
];

export default catInfos;
