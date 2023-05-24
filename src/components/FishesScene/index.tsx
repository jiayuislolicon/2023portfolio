import clsx from "clsx";

type Props = {
	visible: boolean;
};
const imageLayout = ["black", "line", "line", "line", "gray", "line", "line", "khaki"];

const FishesScene = ({ visible }: Props) => {
	return (
		<div
			className={clsx(
				"fixed top-0 left-0 bottom-0 right-0 w-full h-full overflow-hidden z-10",
				!visible && "hidden"
			)}
		>
			<div className='py-[10vh] lg:py-[4vw] px-[2.7vw] w-[200%] lg:w-full h-full flex flex-col justify-between'>
				{imageLayout.map((icon, index) => (
					<img
						src={`/special-fish-${icon}.svg`}
						className={clsx(
							"w-full h-auto",
							index % 2 === 0
								? "-scale-x-100 animate-fishMove-reverse"
								: "animate-fishMove"
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default FishesScene;
