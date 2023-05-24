import clsx from "clsx";
import type { CSSProperties } from "react";

type Props = {
	visible: boolean;
};

const YarnScene = ({ visible }: Props) => {
	const base = 1;

	return (
		<div
			className={clsx(
				"fixed top-0 left-0 bottom-0 right-0 w-full h-full overflow-hidden z-10",
				!visible && "hidden"
			)}
		>
			{["/gray-right.svg", "/khaki-side.svg", "/black-side.svg"].map((location, index) => (
				<div
					className='absolute top-1/2 left-0 h-[10vh] lg:h-[23.5vh] animate-catMove'
					key={location}
					style={{ "--delay": `${base + index * 0.7}s` } as CSSProperties}
				>
					<img
						src={location}
						className='h-full w-auto animate-catBounce origin-bottom'
						style={{ "--delay": `${index * 0.3}s` } as CSSProperties}
					/>
				</div>
			))}
			<div className='absolute top-1/2 right-0 items-end h-[10vh] lg:h-[23.5vh] w-1/2 animate-yarnMove'>
				<img
					src='/special-yarn-line.svg'
					alt='yarn-line'
					className='absolute left-[10%] bottom-[5%] w-full h-auto'
				/>
				<img
					src='/special-yarn-body.svg'
					alt='yarn-body'
					className='absolute left-0 h-full w-auto animate-yarnRotaion'
				/>
			</div>
		</div>
	);
};

export default YarnScene;
