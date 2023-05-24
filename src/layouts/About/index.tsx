import { useLottie } from "lottie-react";
import { useEffect, useState, useRef } from "react";

import BgCircle from "../../components/BgCircle";
import animation from "./animation.json";
import clsx from "clsx";

const About = () => {
	const { View } = useLottie({ animationData: animation, loop: true });
	const [inRange, setInRange] = useState(false);
	const container = useRef<HTMLElement>(null);

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
				threshold: 0.2,
			}
		);

		observer.observe(container.current!);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<BgCircle
				color='white'
				className='absolute top-0 z-[-1]'
				title='ABOUT'
				containerClass='lg:h-[30vw]'
			/>
			<section
				className='grid-layout py-[105px] relative lg:pt-28 lg:pb-52 lg:place-items-center'
				ref={container}
			>
				<div className='col-start-1 col-end-7 lg:col-start-2 lg:col-end-6 '>
					<p
						className={clsx(
							"mb-[45px] lg:mb-20 leading-relaxed text-brown text-normal tracking-wide duration-1000 transition-transform lg:text-xxl-lg",
							inRange ? "translate-y-[70vh]" : "translate-y-0"
						)}
					>
						從大學時期開始對前端慢慢產生興趣，特別是為編排填入流暢舒服的動態與互動設計，也逐漸產生好奇心並開始探索。
						喜歡與團隊討論並一同打造全面且友善的介面體驗，隨和的個性容易吸收意見，同時也能學習不同的看法，思考為想法與實作找出一個平衡。
					</p>
					<div
						className={clsx(
							"border-t border-b border-brown py-[10px] flex justify-between items-center text-brown duration-1000 transition-transform",
							inRange ? "translate-y-[70vh]" : "translate-y-0 delay-150"
						)}
					>
						<span className='text-normal-xl'>Dosomething studio</span>
						<span>2019 - 2023</span>
					</div>
				</div>
				<div
					className={clsx(
						"col-start-1 col-end-7 lg:col-start-7 lg:col-end-12 mt-[90px] lg:mt-auto duration-1000 transition-transform",
						inRange ? "translate-y-[70vh]" : "translate-y-0 delay-200"
					)}
				>
					{View}
				</div>
			</section>
		</>
	);
};

export default About;
