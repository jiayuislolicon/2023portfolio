import BgCircle from "../../components/BgCircle";
import GyroCatHeads from "../../components/GyroCatHeads";
import HorCatHeads from "../../components/HorCatHeads";

type Props = {
	width: number;
};

const MainVisual = ({ width }: Props) => {
	return (
		<section className='pt-10'>
			<div className='relative z-[1] flex flex-col items-center lg:flex-row lg:justify-center'>
				<h1 className='inline-block mb-[10px] lg:mb-0 leading-none text-green-blue'>
					JIAYU
				</h1>
				<div className='lg:mt-[-3.88vw]'>
					<p className='font-bold tracking-[0.32rem] lg:tracking-[0.3rem] text-[4.2rem] leading-none lg:text-[6rem] text-green-blue'>
						FRONTEND
					</p>
					<p className='font-bold tracking-wide lg:tracking-normal text-[4.2rem] leading-none lg:text-[6rem] text-green-blue'>
						DEVELOPER
					</p>
				</div>
			</div>
			<span className='text-normal-2xl text-light-yelow hidden lg:block absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-[2]'>
				2023 PORTFOLIO
			</span>
			<BgCircle
				color='green-blue'
				round
				className='absolute left-1/2 top-[57.5vw] lg:top-[62.5vh] -translate-x-1/2 '
			/>
			{width >= 1024 ? <HorCatHeads className='mt-[-7vw] px-[45px]' /> : <GyroCatHeads />}
		</section>
	);
};

export default MainVisual;
