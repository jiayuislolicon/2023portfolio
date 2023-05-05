import { cva } from "class-variance-authority";
import clsx from "clsx";
import { useState } from "react";

type Props = {
	color?: "green-blue" | "white";
	containerClass?: string;
	title?: string;
	className?: string;
};

const circleVariants = cva(
	"rounded-full w-screen h-[100vw] transition-all duration-1000 absolute top-0 left-1/2 -translate-x-1/2 z-[-1]",
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

const bgColor = {
	white: "bg-green-blue",
	"green-blue": "bg-light-white",
};

const BgCircle = ({ color, title, containerClass, className }: Props) => {
	const [rounded, isRounded] = useState(true);

	return (
		<div className={clsx("relative h-[50vw] z-[1]", containerClass)}>
			<div
				className={clsx(
					"w-full h-full absolute top-0 left-0 z-[-1]",
					color ? bgColor[color] : ""
				)}
			/>
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
				<div
					className={circleVariants({
						round: rounded ? "full" : "none",
						color,
						className,
					})}
				/>
			</div>
			{title && (
				<h2
					className={clsx(
						"text-center w-full absolute bottom-[-50px] lg:bottom-[150px] leading-none",
						color === "white" ? "text-green-blue" : "text-white"
					)}
				>
					{title}
				</h2>
			)}
		</div>
	);
};

export default BgCircle;
