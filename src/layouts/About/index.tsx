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
						從小就喜歡有趣的動態圖像，後來在大學發現網頁可以將動畫和互動融入日常生活，讓我更加熱愛並投身於這個領域。
						為了深入研究，到了Dosomething
						studio，學習使用者體驗和互動的邏輯思維。也發現網頁上充滿了特效和3D的結合，帶來更多可能性。
						然而，現在的我不僅要不斷精進自己的技能，還希望在未來學習不同團隊的實踐精神，找到合適的流程節奏，展現自己的能力，為團隊帶來全新的體驗。
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
