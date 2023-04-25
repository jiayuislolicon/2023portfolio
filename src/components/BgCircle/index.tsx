import { cva } from "class-variance-authority";

type Props = {
	round: boolean;
	color: "green-blue" | "white";
	className?: string;
};

const circleVariants = cva(
	"rounded-full w-[259.2vw] h-[259.2vw] lg:w-screen lg:h-[100vw] transition-all duration-1000",
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

const BgCircle = ({ round, color, className }: Props) => {
	return (
		<div className='absolute top-0 left-0 w-screen h-screen overflow-hidden'>
			<div className={circleVariants({ round: round ? "full" : "none", color, className })} />
		</div>
	);
};

export default BgCircle;
