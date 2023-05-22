import { useLottie } from "lottie-react";
import BgCircle from "../../components/BgCircle";
import animation from "./animation.json";

const About = () => {
	const { View } = useLottie({ animationData: animation, loop: true });

	return (
		<>
			<BgCircle
				color='white'
				className='absolute top-0 z-[-1]'
				title='ABOUT'
				containerClass='lg:h-[30vw]'
			/>
			<section className='grid-layout py-[105px] relative lg:pt-28 lg:pb-52 lg:place-items-center'>
				<div className='col-start-1 col-end-7 lg:col-start-2 lg:col-end-6 '>
					<p className='mb-[45px] lg:mb-20 leading-relaxed text-brown text-normal tracking-wide lg:text-xxl-lg'>
						從大學時期開始對前端慢慢產生興趣，特別是為編排填入流暢舒服的動態與互動設計，也逐漸產生好奇心並開始探索。
						喜歡與團隊討論並一同打造全面且友善的介面體驗，隨和的個性容易吸收意見，同時也能學習不同的看法，思考為想法與實作找出一個平衡。
					</p>
					<div className='border-t border-b border-brown py-[10px] flex justify-between items-center text-brown'>
						<span className='text-normal-xl'>Dosomething studio</span>
						<span>2019 - 2023</span>
					</div>
				</div>
				<div className='col-start-1 col-end-7 lg:col-start-7 lg:col-end-12 mt-[90px] lg:mt-auto'>
					{View}
				</div>
			</section>
		</>
	);
};

export default About;
