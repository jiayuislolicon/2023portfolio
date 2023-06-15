import clsx from "clsx";
import BgCircle from "../../components/BgCircle";
import { useState, useEffect, useRef, WheelEvent, useMemo } from "react";
import Button from "../../components/Button";
import workData from "../../data/workData";

type Props = {
	width: number;
	height: number;
};

const Works = ({ width, height }: Props) => {
	const container = useRef<HTMLDivElement>(null);
	const spacingSection = useRef<HTMLDivElement>(null);
	const [isInRange, setInRange] = useState(false);
	const [workIndex, setWorkIndex] = useState(0);

	const checkWorkIndex = () => {
		const contentTop = spacingSection.current!.getBoundingClientRect().top;
		const inRange =
			contentTop < window.innerHeight + 100 &&
			contentTop > -height * 1 * (workData.length - 1);

		if (inRange) {
			setInRange(true);
			setWorkIndex(() =>
				contentTop > 0
					? Math.max(Math.floor(1 - contentTop / (height * 1)), 0)
					: Math.min(Math.floor(-contentTop / (height * 1) + 1), workData.length - 1)
			);
		} else {
			setInRange(false);
		}
	};

	const handleScroll = () => {
		checkWorkIndex();
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [height]);

	return (
		<>
			<div className='is-green'>
				<BgCircle
					color='green-blue'
					className='absolute top-0'
					title='WORKS'
					containerClass='mt-[-20vw]'
					isViewingWork={isInRange ? workData[workIndex].background : "#22A39F"}
				/>
				<div
					className='h-[90px] w-full transition-colors duration-300'
					style={{
						backgroundColor: isInRange ? workData[workIndex].background : "#22A39F",
					}}
				/>
				<section
					className='relative top-0 left-0 transition-colors duration-300'
					style={{
						backgroundColor: isInRange ? workData[workIndex].background : "#22A39F",
					}}
					ref={container}
				>
					<div className='grid-layout w-screen h-screen place-items-center shrink-0 sticky top-0'>
						<div className='absolute left-0 top-1/2 -translate-y-[15vw] h-0 z-[2] w-full lg:-translate-y-[5vw] pointer-events-none'>
							<div className='overflow-hidden w-full h-[22vw] lg:h-[10vw]'>
								<div
									style={{ transform: `translateY(${workIndex * -20}%)` }}
									className='overflow-hidden w-full transition-transform duration-500'
								>
									{workData.map(({ title, isLongWord }, index) => (
										<div
											className={clsx(
												"flex animate-marquee",
												isLongWord ? " w-[300%]" : " w-[200%]"
											)}
											key={`works-title-${title}`}
										>
											{Array.from({ length: width < 1024 ? 2 : 4 }).map(
												(_, index) => (
													<h3
														className={clsx(
															"text-white leading-none whitespace-pre",
															width < 1024 ? "w-1/2" : "w-1/4"
														)}
														key={`works-title-marquee-${title}-${index}`}
													>
														{title}
													</h3>
												)
											)}
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='absolute bottom-[25px] grid-layout w-full lg:bottom-[4.5vh]'>
							<span className='text-white self-center col-start-1 col-end-4 lg:col-start-2'>
								{workData[workIndex].year}
								<br />
								{workData[workIndex].detail}
							</span>
							<Button
								text={`GO ${workData[workIndex].type}`}
								url={workData[workIndex].link}
								className='col-start-4 col-end-7 place-self-end lg:col-start-10 lg:col-end-12'
							/>
						</div>

						<picture className='col-start-2 col-end-6 lg:col-start-3 w-full h-[60vh] md:h-[70vh] lg:col-end-11 lg:h-[70vh]'>
							<source
								media='(min-width: 1024px)'
								srcSet={`/work-${workIndex + 1}.jpg`}
							/>
							<img
								className='w-full h-full object-cover rounded-full'
								src={`/work-${workIndex + 1}-m.jpg`}
								alt={workData[workIndex].title}
							/>
						</picture>
					</div>
					<div ref={spacingSection} style={{ height: height * workData.length * 1 }} />
				</section>
			</div>
		</>
	);
};

export default Works;
