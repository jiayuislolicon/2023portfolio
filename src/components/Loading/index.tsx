import clsx from "clsx";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import { preloadByProcessing } from "../../utils/loadingAssets";

type Props = {
	assets: string[];
};

const Loading = ({ assets }: Props) => {
	const [loadingPercents, setLoadingPercents] = useState(0);
	const [isFinish, setIsFinish] = useState(false);

	useEffect(() => {
		if (assets.length !== 0) {
			assets.forEach((asset) =>
				preloadByProcessing(asset, () => {
					setLoadingPercents((prev) => Math.floor(prev + 100 / assets.length));
				})
			);
		}
	}, [assets]);

	useEffect(() => {
		if (loadingPercents === 100) {
			setIsFinish(true);
			setTimeout(() => window.scrollTo(0, 0), 0);
		}
	}, [loadingPercents]);

	return (
		<div
			className={clsx(
				"fixed top-0 left-0 bottom-0 right-0 w-full h-full z-30 bg-light-yelow transition-all duration-1000",
				isFinish && "pointer-events-none"
			)}
			style={{ clipPath: isFinish ? "inset(100% 0 0 0)" : "inset(0 0 0 0)" }}
		>
			<span className='text-green-blue absolute left-[15px] top-[15px] leading-none text-2xl lg:text-3xl'>
				JIAYU
				<br />
				2023 PORTFOLIO
			</span>
			<span className='text-green-blue absolute right-[15px] top-[15px] leading-none text-5xl lg:text-7xl'>
				{loadingPercents}%
			</span>
			<div
				className={clsx(
					"absolute left-1/2 -translate-x-1/2 top-[55%] flex",
					isFinish && "translate-y-[40vw] transition-transform duration-500"
				)}
			>
				{["/gray-right.svg", "/khaki-side.svg", "/black-side.svg"].map(
					(location, index) => (
						<div className='w-[23.5vw] lg:w-[12vw] mx-[2.5vw]' key={location}>
							<img
								src={location}
								className={clsx("w-full h-auto origin-bottom animate-catBounce")}
								style={{ "--delay": `${index * -0.3}s` } as CSSProperties}
								alt=''
							/>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Loading;
