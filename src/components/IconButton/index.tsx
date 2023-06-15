import { ReactComponent as Email } from "./icon-email.svg";
import { ReactComponent as Facebook } from "./icon-facebook.svg";
import { ReactComponent as Github } from "./icon-github.svg";

export type Props = {
	url: string;
	type: "github" | "facebook" | "email";
};

const iconClassName =
	"relative fill-brown group-hover:fill-light-yelow transition-colors duration-150";

const iconSrc = {
	github: <Github className={iconClassName} />,
	facebook: <Facebook className={iconClassName} />,
	email: <Email className={iconClassName} />,
};

const IconButton = ({ url, type }: Props) => {
	return (
		<a href={url} target='_blank' rel='noreferrer' aria-label={type}>
			<button
				className='w-[45px] h-[45px] rounded-full bg-light-yelow group relative'
				aria-label={type}
			>
				<div className='w-full h-full rounded-full absolute top-0 left-0 bg-brown scale-0 group-hover:scale-100 transition-transform duration-300 z-0' />
				<span className='hidden'>{type}</span>
				{iconSrc[type]}
			</button>
		</a>
	);
};

export default IconButton;
