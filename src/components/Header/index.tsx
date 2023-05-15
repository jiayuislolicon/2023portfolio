import clsx from "clsx";
import { useState } from "react";

type Props = {
	onClick: Function;
};

const Header = ({ onClick }: Props) => {
	const [isOpened, setIsOpened] = useState(true);

	return (
		<header className='fixed flex justify-between items-center w-full px-[15px] top-[10px] lg:top-[15px]'>
			<span className='text-normal-2xl'>JIAYU</span>
			<button
				className='w-[35px] h-[35px] rounded-full relative z-[1] bg-white lg:hidden'
				onClick={() => setIsOpened(!isOpened)}
			>
				<span
					className={clsx(
						"w-[20px] h-[2px] bg-green-blue block absolute left-1/2 -translate-x-1/2 top-[10px] origin-top-left transition-transform",
						isOpened ? "scale-x-0" : ""
					)}
				/>
				<span
					className={clsx(
						"w-[20px] h-[2px] bg-green-blue block absolute left-1/2 -translate-x-1/2 top-[16px] origin-top-left transition-transform",
						isOpened ? "scale-x-0" : ""
					)}
				/>
				<span
					className={clsx(
						"w-[20px] h-[2px] bg-green-blue block absolute left-1/2 -translate-x-1/2 top-[22px] origin-top-left transition-transform",
						isOpened ? "scale-x-0" : ""
					)}
				/>
				<span
					className={clsx(
						"w-[22px] h-[2px] bg-green-blue block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-transform rotate-[37deg]",
						isOpened ? "" : "scale-x-0"
					)}
				/>
				<span
					className={clsx(
						"w-[22px] h-[2px] bg-green-blue block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-transform rotate-[-37deg]",
						isOpened ? "" : "scale-x-0"
					)}
				/>
			</button>
			<div
				className={clsx(
					"flex absolute top-1/2 -translate-y-1/2 right-[15px] z-0 bg-white rounded-full w-[75%] max-w-[285px] py-[10px] pl-[30px] transition-opacity lg:px-[40px] lg:max-w-none lg:w-auto lg:right-1/2 lg:translate-x-1/2 ",
					isOpened ? "pointer-event-auto" : "opacity-0 lg:opacity-100 pointer-events-none"
				)}
			>
				{["WORKS", "ABOUT", "CONTACT"].map((string, index) => (
					<button
						className={clsx("text-[14px]", index < 2 && "mr-[25px]")}
						onClick={() => onClick(index)}
					>
						{string}
					</button>
				))}
			</div>
		</header>
	);
};

export default Header;
