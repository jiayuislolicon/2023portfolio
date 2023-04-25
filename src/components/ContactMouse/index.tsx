import { cva } from "class-variance-authority";

import { ReactComponent as Email } from "./contact-email.svg";
import { ReactComponent as Wave } from "./contact-wave.svg";

type Props = {
	type: "email" | "wave";
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

const mouseVariants = cva(
	"w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] rounded-full bg-khaki pointer-events-none",
	{
		variants: {
			visible: {
				false: "animate-scale-large-reverse",
				true: "animate-scale-large",
			},
		},
		defaultVariants: {
			visible: true,
		},
	}
);

const ContactMouse = ({ type, visible, className, mouseX, mouseY }: Props) => {
	return (
		<button
			style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
			className={mouseVariants({ className, visible })}
		>
			{icons[type]}
		</button>
	);
};

export default ContactMouse;
