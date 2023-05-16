import clsx from "clsx";
import BgCircle from "../../components/BgCircle";
import ScrollHorContainer from "../../components/ScrollHorContainer";
import { useState, useEffect, useRef } from "react";
import Button from "../../components/Button";

type Props = {
	width: number;
};

type Status = "isTop" | "isFixed" | "isBottom";

// 待完成 卡住變成absolute的top計算為scrollCOntainer的高度 - 螢幕高度

const Works = ({ width }: Props) => {
	const container = useRef<HTMLDivElement>(null);
	const works = useRef<(HTMLDivElement | null)[]>([]);
	const [infoStatus, setInfoStatus] = useState<Status>("isTop");
	const [containerHeight, setContainerHeight] = useState(0);
	const [workIndex, setWorkIndex] = useState(0);

	const fixSection = () => {
		const { top: contentTop, bottom: contentBottom } =
			container.current!.getBoundingClientRect();

		if (contentTop > 0) setInfoStatus("isTop");

		if (contentTop < 0 && contentBottom > window.innerHeight) setInfoStatus("isFixed");

		if (contentBottom < window.innerHeight) setInfoStatus("isBottom");
	};

	const checkWorkIndex = () => {
		works.current.forEach((work, index) => {
			if (
				work &&
				work.getBoundingClientRect().left < 0 &&
				work.getBoundingClientRect().left > -window.innerWidth
			) {
				setWorkIndex(index);
			}
		});
	};

	const hanldeResize = () => {
		setContainerHeight(container.current!.clientHeight - window.innerHeight);
	};

	const handleScroll = () => {
		fixSection();
		checkWorkIndex();
	};

	useEffect(() => {
		fixSection();
		hanldeResize();
	}, []);

	return (
		<>
			<BgCircle
				color='green-blue'
				className='absolute top-0'
				title='WORKS'
				containerClass='mt-[-20vw]'
			/>
			<div className='bg-green-blue h-[90px] w-full' />
			<section className='bg-green-blue relative' ref={container}>
				<div
					className={clsx(
						"w-full h-screen bottom-0 top-0 left-0 right-0 z-[2]",
						infoStatus === "isFixed" ? "fixed" : "absolute"
					)}
					style={{ top: `${infoStatus === "isBottom" ? containerHeight : 0}px` }}
				>
					<div className='absolute top-[7.3vh] grid-layout h-0 lg:top-[4.5vh] w-full'>
						<span className=' text-white lg:text-2xl col-start-1 col-end-4 lg:col-start-2'>
							2022
						</span>
					</div>
					<div className='absolute top-1/2 -translate-y-[15vw] h-0 z-[2] w-full lg:-translate-y-[5vw]'>
						<div className='overflow-hidden w-full h-[22vw] lg:h-[10vw]'>
							<div
								style={{ transform: `translateY(${workIndex * -20}%)` }}
								className='transition-transform duration-500'
							>
								{[
									"EASYCARD1",
									"EASYCARD2",
									"EASYCARD3",
									"EASYCARD4",
									"EASYCARD5",
								].map((string) => (
									<div
										className='flex animate-marquee w-[200%]'
										key={`works-title-${string}`}
									>
										{Array.from({ length: width < 1024 ? 2 : 4 }).map(
											(_, index) => (
												<h3
													className={clsx(
														"text-white leading-none",
														width < 1024 ? "w-1/2" : "w-1/4"
													)}
													key={`works-title-marquee-${string}-${index}`}
												>
													{string}
												</h3>
											)
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='absolute bottom-[7.3vh] grid-layout lg:bottom-[4.5vh]'>
						<span className='text-white self-center col-start-1 col-end-4 lg:col-start-2'>
							作品說明作品說明作品說明作品說明作品說明
						</span>
						<Button
							text='GO WEBSITE'
							url=''
							className='col-start-4 col-end-7 place-self-end lg:col-start-10 lg:col-end-12'
						/>
					</div>
				</div>
				<ScrollHorContainer onResize={hanldeResize} onScroll={handleScroll}>
					{Array.from({ length: 5 }).map((_, index) => (
						<div
							className='grid-layout w-screen h-screen place-items-center shrink-0'
							key={`works-${index}`}
							ref={(el) => (works.current[index] = el)}
						>
							<img
								className='col-start-2 col-end-6 w-full h-[52vh] object-cover rounded-full lg:col-end-11 lg:h-[70vh]'
								src='https://picsum.photos/550/1200'
								alt=''
							/>
						</div>
					))}
				</ScrollHorContainer>
				{/* <div className='grid-layout h-screen shrink-0 pt-[7.3vh] relative lg:pt-[14.3vh]'>
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
				</div> */}
			</section>
		</>
	);
};

export default Works;
