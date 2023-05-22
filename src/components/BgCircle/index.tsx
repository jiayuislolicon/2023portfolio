import { cva } from "class-variance-authority";
import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

type Props = {
	color?: "green-blue" | "white";
	containerClass?: string;
	title?: string;
	className?: string;
};

const circleVariants = cva(
	"w-screen h-[100vw] transition-all duration-1000 absolute top-0 left-1/2 -translate-x-1/2 z-[-1]",
	{
		variants: {
			/* button roundness */
			round: {
				none: "rounded-[3%]",
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
	const circleContainer = useRef<HTMLDivElement>(null);
	const [inRange, setInRange] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const currentY = entry.boundingClientRect.y;
					const checkIsRound = currentY > 0 && !entry.isIntersecting;
					setInRange(checkIsRound);
				});
			},
			{
				threshold: 0.8,
			}
		);

		observer.observe(circleContainer.current!);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className={clsx("relative h-[50vw] z-[1]", containerClass)} ref={circleContainer}>
			<div
				className={clsx(
					"w-full h-full absolute top-0 left-0 z-[-1]",
					color ? bgColor[color] : ""
				)}
			/>
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
				<div
					className={circleVariants({
						round: inRange ? "full" : "none",
						color,
						className,
					})}
				/>
			</div>
			{title && (
				<h2
					className={clsx(
						"text-center w-full absolute bottom-[-50px] lg:bottom-[5%] leading-none anchor flex items-center justify-center",
						color === "white" ? "text-green-blue" : "text-white"
					)}
				>
					{[...title].map((s, index) => (
						<span
							key={`${title}-${s}`}
							className='transition-transform duration-500'
							style={{
								transform: inRange
									? `translateY(${(index + 1) * 20}%) scaleY(1.5)`
									: `translateY(0) scaleY(1)`,
								transitionDelay: inRange ? `0s` : `${0.1 * index}s`,
							}}
						>
							{s}
						</span>
					))}
				</h2>
			)}
		</div>
	);
};

export default BgCircle;
