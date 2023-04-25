import { cva } from "class-variance-authority";

type Props = {
	imgUrl: string;
	title: string;
	content: string;
	color: "white" | "greenBlue";
	className?: string;
};

const cardVariants = cva(
	"w-[88%] lg:w-[calc(100%_+_20px)] rounded-[2.143rem] lg:rounded-[1.875rem] px-[1.072rem] lg:px-[2.1875rem] py-[2.143rem] lg:py-[2.8125rem] lg:max-h-[27.25rem]",
	{
		variants: {
			color: {
				greenBlue: "bg-green-blue text-light-yelow",
				white: "bg-white text-brown",
			},
		},

		// defaults
		defaultVariants: {
			color: "white",
		},
	}
);

const PersonaCard = ({ content, imgUrl, title, color, className }: Props) => {
	return (
		<div className={cardVariants({ color: color, className })}>
			<span className='text-normal-3xl mb-[5px] leading-none uppercase'>{title}</span>
			<p className='text-normal mb-[50px]'>{content}</p>
			<img
				className='w-[calc(100%_-_40px)] lg:w-[calc(100%_-_20px)] h-auto m-auto'
				src={imgUrl}
				alt={title}
			/>
		</div>
	);
};

export default PersonaCard;
