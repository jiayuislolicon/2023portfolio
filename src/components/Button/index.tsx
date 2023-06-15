type Props = {
	text: string;
	url: string;
	className?: string;
};

const Button = ({ text, url, className }: Props) => {
	return (
		<a href={url} target='_blank' rel='noreferrer' className={className} aria-label={text}>
			<button
				aria-label={text}
				className='lg:text-[1.125rem] text-center py-[12px] px-[15px] lg:py-[21px] lg:px-[24px] rounded-[120px] bg-gray hover:bg-brown hover:text-light-yelow transition-colors duration-300'
			>
				{text}
			</button>
		</a>
	);
};

export default Button;
