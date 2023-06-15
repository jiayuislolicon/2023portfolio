import clsx from "clsx";
import type { CSSProperties } from "react";

type Props = {
	visible: boolean;
};

const spacing = ["left-[10%]", "", "left-[20%]"];
const delay = [0.1, 0, 0.2];

const RainbowScene = ({ visible }: Props) => {
	return (
		<div
			className={clsx(
				"fixed top-0 left-0 bottom-0 right-0 w-full h-full overflow-hidden flex flex-col justify-center z-10",
				!visible && "hidden"
			)}
		>
			{["/black-side.svg", "/khaki-side.svg", "/gray-left.svg"].map((location, index) => (
				<div
					className={clsx(
						"flex items-center animate-rainbowMove relative",
						spacing[index],
						index < 2 && "mb-[10vh]"
					)}
					style={{ "--delay": `${delay[index]}s` } as CSSProperties}
					key={`rainbow-${location}`}
				>
					<img
						src={location}
						className={clsx(
							"h-[21vh] w-auto relative z-[1]",
							index < 2 && "-scale-x-100"
						)}
						alt=''
					/>
					<div className='h-[16vh] w-[100vh] lg:w-[66vw] relative left-[-5%] lg:left-[-2%] z-0 overflow-hidden'>
						<div className='animate-marquee-rainbow flex h-full'>
							{Array.from({ length: 25 }).map((_, i) => (
								<img
									src='/special-rainbow.svg'
									key={`rainbow-${index}-${i}`}
									className={clsx(
										"h-full w-auto",
										i % 2 !== 0 && " translate-y-[5%]"
									)}
									alt=''
								/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RainbowScene;
