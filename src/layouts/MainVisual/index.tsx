import BgCircle from "../../components/BgCircle";
import GyroCatHeads from "../../components/GyroCatHeads";

const MainVisual = () => {
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
			<BgCircle color='green-blue' round />
			<GyroCatHeads />
		</section>
	);
};

export default MainVisual;
