import { ReactComponent as Email } from "./contact-email.svg";
import { ReactComponent as Wave } from "./contact-wave.svg";

type Props = {
	type: "email" | "wave";
	visible: boolean;
};

const iconClassName = "animate-scale-large";

const icons = {
	email: <Email className={iconClassName} />,
	wave: <Wave className={iconClassName} />,
};

const BgCircle = ({ type, visible }: Props) => {
	return (
		<button
			className={`w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] rounded-full bg-khaki transition-transform duration-300 pointer-events-none ${
				visible ? "scale-100" : "scale-0"
			}`}
		>
			{icons[type]}
		</button>
	);
};

export default BgCircle;
