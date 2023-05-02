import { cva } from "class-variance-authority";
import { useEffect, useRef, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

// 注意不要在父層級(像是body, html)加入其他position屬性與overflow-hidden
// stikcy 會無效

const ScrollHorContainer = ({ children }: Props) => {
	const stickyContainer = useRef<HTMLElement>(null);
	const prevScrollTop = useRef(0);

	const setStickyContainerSize = () => {
		if (stickyContainer.current) {
			const stickyContainerHeight = stickyContainer.current.children[0].scrollWidth;
			stickyContainer.current.style.height = `${
				window.innerWidth < window.innerHeight
					? window.innerHeight + stickyContainerHeight
					: stickyContainerHeight
			}px`;
		}
	};

	const isElementInViewport = (element: HTMLElement) => {
		const { top, bottom } = element.getBoundingClientRect();
		return top <= 0 && bottom > document.documentElement.clientHeight;
	};

	const handleScrollEvent = () => {
		if (stickyContainer.current) {
			const isInViewport = isElementInViewport(stickyContainer.current);

			if (!isInViewport) {
				prevScrollTop.current = window.scrollY;
				return;
			}

			const isBelowTop =
				stickyContainer.current.offsetTop < document.documentElement.scrollTop;
			const isBelowBottom =
				stickyContainer.current.offsetTop + stickyContainer.current.offsetHeight >
				document.documentElement.scrollTop;
			const canScrollHorizontally = isBelowTop && isBelowBottom;

			if (canScrollHorizontally) {
				const delta = window.scrollY - prevScrollTop.current;
				prevScrollTop.current = window.scrollY;
				stickyContainer.current.children[0].scrollLeft += delta;
			}
		}
	};

	useEffect(() => {
		setStickyContainerSize();

		const handleResize = () => {
			setStickyContainerSize();
		};

		window.addEventListener("scroll", handleScrollEvent);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScrollEvent);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section ref={stickyContainer}>
			<div className='overflow-x-hidden flex sticky top-0'>
				{children}
				{/* example
					<div className='min-w-[50vw] min-h-[100vh] flex justify-center items-center'>
						asdf
					</div>
				*/}
			</div>
		</section>
	);
};

export default ScrollHorContainer;
