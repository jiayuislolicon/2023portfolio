import { useState, useRef, useEffect, MouseEvent } from "react";
import { useLottie } from "lottie-react";

import BgCircle from "../../components/BgCircle";
import ContactMouse, { Props as mouseType } from "../../components/ContactMouse";
import IconButton, { Props as buttonInfo } from "../../components/IconButton";
import catFace from "./catFace.json";

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
	const cat = useRef<(HTMLElement | null)[]>([]);
	const [mouseInfo, setMouseInfo] = useState<mouseType>({
		mouseX: 0,
		mouseY: 0,
		visible: false,
		type: "email",
	});

	const { View, playSegments, stop } = useLottie({
		animationData: catFace,
		loop: false,
	});

	useEffect(() => {
		playSegments([0, 25], true);
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
			type: type ? (type as mouseType["type"]) : "email",
			visible: type !== "",
			mouseX: e.screenX,
			mouseY: e.screenY - container.current!.getBoundingClientRect().top,
		}));
	};

	return (
		<section
			className='h-screen relative overflow-hidden z-[1]'
			onMouseMove={handleMouseMove}
			ref={container}
		>
			<BgCircle color='green-blue' containerClass='top-0 left-0 w-full z-[0]' />
			<h2
				ref={title}
				className='leading-none underline text-white text-center absolute top-28 left-1/2 -translate-x-1/2 z-[3] lg:top-[90px]'
			>
				GET IN
				<br />
				TOUCH
			</h2>
			<div
				className='w-full h-[60vh] lg:h-[82vh] overflow-hidden absolute bottom-0 left-0 z-[1]'
				ref={(el) => (cat.current[0] = el)}
			>
				<img
					src='/black-contact.svg'
					className='w-[110%] lg:w-[60vw] h-auto max-w-none relative left-[-5%] z-[1] lg:left-1/2 lg:-translate-x-1/2'
				/>
				<div className='absolute top-0 left-0 z-[1] w-[100%] h-auto lg:w-[60vw] lg:left-1/2 lg:-translate-x-1/2'>
					{View}
				</div>
				<div className='h-[60%] w-full lg:w-[80vw] bg-cat-black absolute bottom-0 left-1/2 -translate-x-1/2 z-[0] lg:rounded-tl-full lg:rounded-tr-full' />
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
			{/* <ContactMouse
				visible={mouseInfo.visible}
				type={mouseInfo.type}
				className='absolute top-0 left-0 z-[2]'
				mouseX={mouseInfo.mouseX}
				mouseY={mouseInfo.mouseY}
			/> */}

			<div className='w-full h-[calc(100%_-_50vw)] bg-green-blue absolute bottom-0 left-0 z-[-1]'></div>
		</section>
	);
};

export default Contact;
