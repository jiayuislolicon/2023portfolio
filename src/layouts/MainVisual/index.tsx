import { useState } from "react";

import FishesScene from "../../components/FishesScene";
import GyroCatHeads from "../../components/GyroCatHeads";
import HorCatHeads from "../../components/HorCatHeads";
import RainbowScene from "../../components/RainbowScene";
import YarnScene from "../../components/YarnScene";

type Props = {
	width: number;
};

type SceneStatus = "fish" | "yarn" | "rainbow";

const MainVisual = ({ width }: Props) => {
	const [sceneStatus, setSceneStatus] = useState<SceneStatus | "">("");

	const changeSceneStatus = (status: SceneStatus) => {
		setSceneStatus(status);

		const delaySec = {
			fish: 3000,
			rainbow: 3000,
			yarn: 5200,
		};

		setTimeout(() => {
			setSceneStatus("");
		}, delaySec[status]);
	};

	return (
		<section className='pt-10 lg:pt-0 min-h-[100svh] relative z-[2]'>
			<div className='relative z-[1] flex flex-col items-center lg:flex-row lg:justify-center'>
				<h1 className='inline-block leading-none text-green-blue'>JIAYU</h1>
				<div className='lg:mt-[-3.88vw]'>
					<p className='font-bold tracking-[0.32rem] lg:tracking-[0.3rem] text-[4.2rem] leading-none lg:text-[6rem] text-green-blue md:hidden lg:block'>
						FRONTEND
					</p>
					<p className='font-bold tracking-wide lg:tracking-normal text-[4.2rem] leading-none lg:text-[6rem] text-green-blue md:hidden lg:block'>
						DEVELOPER
					</p>
					<p className='font-bold tracking-[0.1rem] text-[2rem] leading-none text-green-blue hidden md:block lg:hidden'>
						FRONTEND DEVELOPER
					</p>
				</div>
			</div>
			<span className='text-normal-2xl text-light-yelow hidden lg:block absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-[2]'>
				2023 PORTFOLIO
			</span>
			{width >= 1024 ? (
				<HorCatHeads
					className='mt-[-8vw] px-[45px]'
					changeSceneStatus={changeSceneStatus}
				/>
			) : (
				<GyroCatHeads changeSceneStatus={changeSceneStatus} />
			)}
			<FishesScene visible={sceneStatus === "fish"} />
			<YarnScene visible={sceneStatus === "yarn"} />
			<RainbowScene visible={sceneStatus === "rainbow"} />
		</section>
	);
};

export default MainVisual;
