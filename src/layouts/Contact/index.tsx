import { useState, useRef, useEffect, MouseEvent } from "react";
import { useLottie } from "lottie-react";

import BgCircle from "../../components/BgCircle";
import ContactMouse, { Props as mouseType } from "../../components/ContactMouse";
import IconButton, { Props as buttonInfo } from "../../components/IconButton";
import catFace from "./catFace.json";
import clsx from "clsx";

const catFaceFrames = {
	normalClose: [0, 12],
	normalOpen: [13, 25],
	kiraClose: [30, 42],
	kiraOpen: [43, 55],
	kirakira: [60, 70],
};

const buttonInfos: buttonInfo[] = [
	{
		type: "facebook",
		url: "https://www.facebook.com/hi.im.lolicon",
	},
	{
		type: "github",
		url: "https://github.com/jiayuislolicon",
	},
	{
		type: "email",
		url: "mailto:lovesyndra@gmail.com",
	},
];

const Contact = () => {
	const container = useRef<HTMLDivElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
	const prevType = useRef("");
	const cat = useRef<(HTMLElement | null)[]>([]);
	const [isEntered, setIsEntered] = useState(false);
	const [mouseInfo, setMouseInfo] = useState<mouseType>({
		mouseX: 0,
		mouseY: 0,
		visible: false,
		type: "wave",
	});

	const { View, playSegments, stop } = useLottie({
		animationData: catFace,
		loop: false,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsEntered(entry.isIntersecting);
					// @ts-ignore
					playSegments(catFaceFrames.normalOpen, true);
				});
			},
			{
				threshold: 0.8,
			}
		);

		observer.observe(container.current!);

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleMouseMove = (e: MouseEvent) => {
		let type = "";

		// on the cat
		if (cat.current.includes(e.target as HTMLElement)) {
			type = "wave";
		}

		// on the wording
		if ((e.target as HTMLElement) === title.current) {
			type = "email";
		}

		setMouseInfo((prev: typeof mouseInfo) => ({
			...prev,
			type: type as mouseType["type"],
			visible: type !== "",
			mouseX: e.screenX,
			mouseY: e.screenY - container.current!.getBoundingClientRect().top,
		}));
	};

	useEffect(() => {
		if (mouseInfo.type === "email") {
			stop();

			// @ts-ignore
			playSegments([catFaceFrames.kiraOpen, catFaceFrames.kirakira], true);
		} else if (mouseInfo.type === "wave") {
			stop();

			playSegments(
				// @ts-ignore
				prevType.current === "email" ? catFaceFrames.kiraClose : catFaceFrames.normalClose,
				false
			);
		} else if (mouseInfo.type === "" && prevType.current !== "") {
			// @ts-ignore
			playSegments(catFaceFrames.normalOpen, false);
		}

		prevType.current = mouseInfo.type;
	}, [mouseInfo.type]);

	return (
		<section
			className='h-screen relative overflow-hidden z-[1] anchor'
			onMouseMove={handleMouseMove}
			ref={container}
		>
			<BgCircle color='green-blue' containerClass='top-0 left-0 w-full z-[0]' />
			<h3
				ref={title}
				className='leading-none underline text-white text-center absolute top-28 left-1/2 -translate-x-1/2 z-[3] lg:top-[90px] cursor-pointer'
			>
				GET IN
				<br />
				TOUCH
			</h3>
			<div className='w-full h-[60vh] lg:h-[82vh] overflow-hidden absolute bottom-0 left-0 z-[1]'>
				<div
					className={clsx(
						"w-[110%] lg:w-[60vw] h-auto max-w-none relative left-[-5%] z-[1] lg:left-1/2 lg:-translate-x-1/2 transition-transform duration-700",
						isEntered ? "translate-y-0" : "translate-y-1/4"
					)}
					ref={(el) => (cat.current[0] = el)}
				>
					<div
						className={clsx(
							"pointer-events-none",
							mouseInfo.type !== "wave" && "transition-transform duration-100"
						)}
						style={{
							transform: `translate(${
								mouseInfo.type !== "wave" ? 0 : mouseInfo.mouseX / 50
							}px, ${mouseInfo.type !== "wave" ? 0 : mouseInfo.mouseY / 10}px)`,
						}}
					>
						<img src='/black-contact.svg' className='w-full' />
						<div className='w-full h-auto absolute top-0 left-0 z-[1]'>{View}</div>
					</div>
				</div>
				<div
					className='h-[60%] w-full lg:h-[80vw] lg:w-[80vw] bg-cat-black absolute bottom-0 left-1/2 -translate-x-1/2 z-[0] lg:top-1/3 lg:rounded-full'
					ref={(el) => (cat.current[1] = el)}
				/>
			</div>
			<span className='absolute z-[1] bottom-[125px] left-1/2 -translate-x-1/2 text-normal-2xl lg:text-normal text-white text-center leading-tight lg:bottom-[60px] lg:left-[calc((100%_-_200px)_/_12_*_10_+_225px)]'>
				2023 JIAYU LU
				<br />
				FRONTEND DEV
			</span>
			<div className='flex justify-between w-[195px] z-[1] absolute bottom-[60px] left-1/2 -translate-x-1/2 lg:left-[calc((100%_-_200px)_/_12_*_2_+_45px)]'>
				{buttonInfos.map((info) => (
					<IconButton
						url={info.url}
						type={info.type}
						key={`contact-button-${info.type}`}
					/>
				))}
			</div>
			<ContactMouse
				visible={mouseInfo.visible}
				type={mouseInfo.type}
				className='absolute top-0 left-0'
				mouseX={mouseInfo.mouseX}
				mouseY={mouseInfo.mouseY}
			/>

			<div className='w-full h-[calc(100%_-_50vw)] bg-green-blue absolute bottom-0 left-0 z-[-1]'></div>
		</section>
	);
};

export default Contact;
