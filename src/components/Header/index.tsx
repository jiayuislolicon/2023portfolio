import clsx from "clsx";
import { useState, useEffect } from "react";
import { ReactComponent as Button } from "./header-button.svg";
import throttle from "../../utils/throttle";

const Header = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [nameIsDark, setNameIsDark] = useState(true);

	const handleMovingByAnchor = (index: number) => {
		const sections = document.querySelectorAll(".anchor");
		const spacing =
			window.innerWidth < 1024 ? window.innerHeight * 0.1 : window.innerHeight * 0.2;

		window.scrollTo({
			top:
				sections[index].getBoundingClientRect().top +
				window.scrollY -
				(index < 2 ? spacing : 0),
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll(".is-green");
			let isDark = true;

			sections.forEach((section, index) => {
				const { top, bottom } = section.getBoundingClientRect();
				// Enter
				if (top < 50) {
					isDark = false;
				}
				// Leave
				if (bottom < 0) {
					isDark = true;
				}
			});
			return isDark;
		};

		const processChange = throttle(() => {
			const isDark = handleScroll();
			setNameIsDark(isDark);
		}, 300);

		window.addEventListener("scroll", processChange, { passive: true });

		return () => {
			window.removeEventListener("scroll", processChange);
		};
	}, []);

	return (
		<header className='fixed z-10 flex justify-between items-center w-full px-[15px] top-[10px] md:top-[15px]'>
			<button
				className={clsx(
					"text-normal-2xl transition-color duration-100",
					nameIsDark ? "text-brown" : "text-white"
				)}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label='go top'
			>
				JIAYU
			</button>
			<button
				className='w-[35px] h-[35px] rounded-full relative z-[1] bg-white overflow-hidden md:hidden'
				onClick={() => setIsOpened(!isOpened)}
				aria-label='open menu'
			>
				<Button className='w-full h-full' />
				<div
					className={clsx(
						"w-full h-full rounded-full bg-white absolute top-0 left-0 transition-transform duration-300",
						!isOpened && "scale-0"
					)}
				>
					<svg x='0px' y='0px' viewBox='0 0 35 35'>
						<line
							fill='none'
							stroke='#22A39F'
							strokeWidth='2'
							strokeLinecap='round'
							x1='9.3'
							y1='11.1'
							x2='25.7'
							y2='23.9'
							className={clsx(
								"transition-transforum duration-300 delay-300 origin-center",
								!isOpened && "rotate-45"
							)}
						/>
						<line
							fill='none'
							stroke='#22A39F'
							strokeWidth='2'
							strokeLinecap='round'
							x1='8.8'
							y1='23.9'
							x2='26.2'
							y2='11.1'
							className={clsx(
								"transition-transforum duration-300 delay-300 origin-center",
								!isOpened && "-rotate-45"
							)}
						/>
					</svg>
				</div>
			</button>
			<div
				className={clsx(
					"absolute top-1/2 -translate-y-1/2 right-[20px] z-0 h-[35px] overflow-hidden rounded-full md:h-[40px] md:right-1/2 md:translate-x-1/2 ",
					isOpened ? "pointer-event-auto" : "pointer-events-none md:pointer-events-auto"
				)}
			>
				<div
					className={clsx(
						"flex bg-white pl-[20px] pr-[35px] md:px-[40px] h-full transition-transform duration-300 md:transition-none",
						!isOpened && "translate-x-full md:translate-x-0"
					)}
				>
					{["WORKS", "ABOUT", "CONTACT"].map((string, index) => (
						<button
							className={clsx(
								"hover:text-green-blue transition-colors duration-150",
								index < 2 && "mr-[10px] lg:mr-[20px]"
							)}
							onClick={() => handleMovingByAnchor(index)}
							key={`header-button-${string}`}
							aria-label={`open ${string}`}
						>
							{string}
						</button>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
