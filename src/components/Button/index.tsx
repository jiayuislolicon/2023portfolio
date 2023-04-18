import { cva } from "class-variance-authority";

type Props = {
	text: string;
    url: string;
}


const Button = ({text, url}: Props) => {
	return <a href={url} target="_blank" rel="noreferrer">
		<button className='text-normal lg:text-[1.125rem] text-center py-[12px] px-[15px] lg:py-[21px] lg:px-[24px] rounded-[120px] bg-gray hover:bg-brown hover:text-light-yelow transition-colors duration-300'>
		{text}
	</button>
	</a>;
};

export default Button;
