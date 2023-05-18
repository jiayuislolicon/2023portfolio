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
			style={{ transform: `translate(${mouseX - 120}px, ${mouseY - 240}px)` }}
			className='w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] absolute top-0 left-0 pointer-events-none z-[4]'
		>
			{type && (
				<button className={mouseVariants({ className, visible })}>{icons[type]}</button>
			)}
		</div>
	);
};

export default ContactMouse;
