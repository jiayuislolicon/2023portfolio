import { useState, useRef } from "react";
import BgCircle from "../../components/BgCircle";
import ContactMouse, { Props as mouseType } from "../../components/ContactMouse";
import IconButton, { Props as buttonInfo } from "../../components/IconButton";

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

	return (
		<section
			className='grid-layout min-h-screen lg:min-h-0 relative mt-[90px] lg:mt-[200px] overflow-hidden'
			onMouseMove={(e) => {
				let type = "";

				if (cat.current.includes(e.target as HTMLElement)) type = "wave";

				if ((e.target as HTMLElement) === title.current) type = "email";

				setMouseInfo((prev: typeof mouseInfo) => ({
					...prev,
					type: type ? (type as mouseType["type"]) : "email",
					visible: type !== "",
					mouseX: e.screenX,
					mouseY: e.screenY - container.current!.getBoundingClientRect().top,
				}));
			}}
			ref={container}
		>
			<BgCircle color='green-blue' containerClass='w-screen left-[-15px] lg:left-[-45px]' />
			<h2
				ref={title}
				className='cursor-none leading-none underline text-white col-start-1 col-end-7 lg:col-start-4 lg:col-end-10 text-center relative z-[2] mb-[calc(100vh_-_(90vw_+_170px))] lg:mb-0 mt-[-80px] lg:mt-[200px]'
			>
				GET IN
				<br />
				TOUCH
			</h2>
			<img
				src='/black-contact.svg'
				className='cursor-none z-[1] absolute left-0 bottom-0 md:bottom-[-15%] w-screen h-auto max-w-none lg:hidden'
				ref={(el) => (cat.current[0] = el)}
			/>
			<img
				src='/black-contact-desktop.svg'
				className='cursor-none z-[1] hidden lg:block lg:col-start-2 lg:col-end-12 relative lg:mt-[-55vh] lg:w-[calc(100%_+_40px)]'
				ref={(el) => (cat.current[1] = el)}
			/>
			<span className='relative z-[1] col-start-1 col-end-7 lg:col-start-11 lg:col-end-12 text-normal-2xl lg:text-normal text-white text-center leading-tight lg:absolute lg:bottom-[60px]'>
				2023 JIAYU LU
				<br />
				FRONTEND DEV
			</span>
			<div className='flex justify-between col-start-2 col-end-6 md:col-start-3 md:col-end-5 lg:absolute lg:col-start-2 lg:col-end-4 lg:w-[calc((100vw_-_310px)_/_6_+_20px)] lg:bottom-[60px] z-[1]'>
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
				className='absolute top-0 left-0 z-[2]'
				mouseX={mouseInfo.mouseX}
				mouseY={mouseInfo.mouseY}
			/>
			<div className='w-full h-[calc(100%_-_50vw)] bg-green-blue absolute bottom-0 left-0 z-[-1]'></div>
		</section>
	);
};

export default Contact;
