import clsx from "clsx";
import BgCircle from "../../components/BgCircle";
import Button from "../../components/Button";
import GyroCatHeads from "../../components/GyroCatHeads";
import HorCatHeads from "../../components/HorCatHeads";
import ScrollHorContainer from "../../components/ScrollHorContainer";
import { useState, useEffect } from "react";

type Props = {
	width: number;
};

// 待完成 卡住變成absolute的top計算為scrollCOntainer的高度 - 螢幕高度

const Works = ({ width }: Props) => {
	const [containerHeight, setContainerHeight] = useState(0);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const options = {
			threshold: 0,
		};

		const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsFixed(true);
					// if (collisionSection.current) collisionSection.current.applyItem();
				} else {
					setIsFixed(false);
				}
			});
		};

		// let observer = new IntersectionObserver(callback, options);
		// if (section.current) observer.observe(section.current);

		// return () => {
		// 	observer.disconnect();
		// };
	}, []);

	return (
		<>
			<section className='bg-green-blue'>
				{/* <div className='fixed w-full h-full bottom-0 top-0 left-0 right-0 z-[2]'>
					<div className='absolute top-[7.3vh] grid-layout h-0 lg:top-[4.5vh] w-full'>
						<span className=' text-white lg:text-2xl col-start-1 col-end-4 lg:col-start-2'>
							2022
						</span>
					</div>
					<div className='absolute top-1/2 -translate-y-[15vw] h-0 z-[2] w-full lg:-translate-y-[7.5vw]'>
						<div className='overflow-hidden w-full'>
							<h3 className='text-white'>EASYCARDEASYCARDEASYCARD</h3>
						</div>
					</div>
					<div className='absolute bottom-[7.3vh] grid-layout lg:bottom-[4.5vh]'>
						<span className='text-white text-normal self-center col-start-1 col-end-4 lg:col-start-2'>
							作品說明作品說明作品說明作品說明作品說明
						</span>
						<Button
							text='GO WEBSITE'
							url=''
							className='col-start-4 col-end-7 place-self-end lg:col-start-10 lg:col-end-12'
						/>
					</div>
				</div> */}
				<ScrollHorContainer getContainerHeight={setContainerHeight}>
					{Array.from({ length: 5 }).map((_, index) => (
						<div
							className='grid-layout w-screen h-screen place-items-center shrink-0'
							key={`works-${index}`}
						>
							<img
								className='col-start-2 col-end-6 w-full h-[52vh] object-cover rounded-full lg:col-end-11 lg:h-[70vh]'
								src='https://picsum.photos/275/470'
								alt=''
							/>
						</div>
					))}
				</ScrollHorContainer>
				<div className='grid-layout h-screen shrink-0 pt-[7.3vh] relative lg:pt-[14.3vh]'>
					<div className=' text-white mb-[8vh] col-start-1 col-end-7 lg:col-start-2 lg:col-end-4 lg:mb-0'>
						<span className='text-normal-2xl lg:text-normal-xl'>MORE WORKS</span>
						<br />
						<span>2017 - 2020</span>
					</div>
					<div className='col-start-1 col-end-7 text-white mb-[10vh] lg:col-start-6 lg:col-end-12 lg:mb-0'>
						{Array.from({ length: 5 }).map((_, index) => (
							<div
								className={clsx(
									"flex justify-between items-center py-[10px] border-white border-b lg:py-[15px]",
									index === 0 && "border-t"
								)}
								key={`work-list-${index}`}
							>
								<span className='text-normal-xl lg:text-normal-2xl'>asdf</span>
								<span>2017</span>
							</div>
						))}
					</div>
					<img
						className='col-start-1 col-end-7 w-[calc(100%_-_15px)] h-[30vh] object-cover object-right relative left-[-15px] md:col-end-6 lg:absolute lg:-left-[45px] lg:bottom-[16.4vh] lg:w-auto'
						src='/khaki-work.svg'
					/>
				</div>
			</section>
		</>
	);
};

export default Works;
