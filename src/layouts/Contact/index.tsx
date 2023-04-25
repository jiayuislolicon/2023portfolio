import { useState } from "react";
import BgCircle from "../../components/BgCircle";
import ContactMouse from "../../components/ContactMouse";
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
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	return (
		<section
			className='grid-layout min-h-screen lg:min-h-0 relative overflow-hidden pt-[90px] lg:pt-[200px]'
			onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
		>
			<BgCircle
				round
				color='green-blue'
				className='absolute z-[0] top-0 left-1/2 -translate-x-1/2'
			/>
			<h2 className='leading-none underline text-white col-start-1 col-end-7 lg:col-start-4 lg:col-end-10 text-center relative z-[1] mb-[calc(100vh_-_(90vw_+_170px))] lg:mb-0'>
				GET IN
				<br />
				TOUCH
			</h2>
			<img
				src='/black-contact.svg'
				className='absolute left-0 bottom-0 md:bottom-[-15%] z-[0] w-screen h-auto max-w-none lg:hidden'
			/>
			<img
				src='/black-contact-desktop.svg'
				className='hidden lg:block lg:col-start-2 lg:col-end-12 relative lg:mt-[-13vw] lg:w-[calc(100%_+_40px)]'
			/>
			<span className='relative z-[1] col-start-1 col-end-7 lg:col-start-11 lg:col-end-12 text-normal-2xl lg:text-normal text-white text-center leading-tight lg:absolute lg:bottom-[60px]'>
				2023 JIAYU LU
				<br />
				FRONTEND DEV
			</span>
			<div className='flex justify-between col-start-2 col-end-6 md:col-start-3 md:col-end-5 lg:absolute lg:col-start-2 lg:col-end-4 lg:w-[calc((100vw_-_310px)_/_6_+_20px)] lg:bottom-[60px]'>
				{buttonInfos.map((info) => (
					<IconButton
						url={info.url}
						type={info.type}
						key={`contact-button-${info.type}`}
					/>
				))}
			</div>
			<ContactMouse
				visible
				type='email'
				className='absolute top-0 left-0 z-[1]'
				mouseX={mousePos.x}
				mouseY={mousePos.y}
			/>
			<div className='hidden lg:block bg-green-blue w-screen h-[20vw] absolute bottom-0 left-0 z-[-1]' />
		</section>
	);
};

export default Contact;
