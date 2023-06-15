import { cva } from "class-variance-authority";

import { ReactComponent as Email } from "./contact-email.svg";
import { ReactComponent as Wave } from "./contact-wave.svg";

export type Props = {
	type: "email" | "wave" | "";
	visible: boolean;
	className?: string;
	mouseX: number;
	mouseY: number;
};

const iconClassName = "animate-scale-large";

const icons = {
	email: <Email className={iconClassName} />,
	wave: <Wave className={iconClassName} />,
};

const mouseVariants = cva("w-full h-full rounded-full bg-khaki transition-transform duration-300", {
	variants: {
		visible: {
			false: "scale-0",
			true: "scale-100",
		},
	},
	defaultVariants: {
		visible: true,
	},
});

const ContactMouse = ({ type, visible, className, mouseX, mouseY }: Props) => {
	return (
		<div
			style={{ transform: `translate(${mouseX - 90}px, ${mouseY - 180}px)` }}
			className='lg:w-[180px] lg:h-[180px] absolute top-0 left-0 pointer-events-none z-[4]'
		>
			<button className={mouseVariants({ className, visible })} aria-label='mouse'>
				{type ? icons[type] : null}
			</button>
		</div>
	);
};

export default ContactMouse;
