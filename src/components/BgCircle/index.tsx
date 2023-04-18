import { cva } from "class-variance-authority";

type Props = {
	round: boolean;
	color: "green-blue" | "white";
};

const CircleVariants = cva(
	"absolute left-1/2 top-[57.5vw] -translate-x-1/2 rounded-full w-[259.2vw] h-[259.2vw] lg:w-screen lg:h-[100vw] transition-all duration-1000",
	{
		variants: {
			/* button roundness */
			round: {
				none: "rounded-[0%]",
				full: "rounded-[50%]",
			},
			color: {
				"green-blue": "bg-green-blue",
				white: "bg-light-yelow",
			},
		},

		// defaults
		defaultVariants: {
			round: "full",
		},
	}
);

const BgCircle = ({ round, color }: Props) => {
	return (
		<div className='relative w-screen h-screen overflow-hidden'>
			<div className={CircleVariants({ round: round ? "full" : "none", color })} />
		</div>
	);
};

export default BgCircle;
