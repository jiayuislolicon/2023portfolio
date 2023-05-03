import { cva } from "class-variance-authority";
import { useEffect, useRef, ReactNode } from "react";

type Props = {
	children: ReactNode;
	getContainerHeight?: Function;
	isBottom?: Function;
};

// 注意不要在父層級(像是body, html)加入其他position屬性與overflow-hidden
// stikcy 會無效

const ScrollHorContainer = ({ children, getContainerHeight, isBottom }: Props) => {
	const stickyContainer = useRef<HTMLDivElement>(null);
	const prevScrollTop = useRef(0);

	const setStickyContainerSize = () => {
		if (stickyContainer.current) {
			const { scrollWidth } = stickyContainer.current.children[0];
			const stickyContainerHeight =
				window.innerWidth < window.innerHeight
					? window.innerHeight + scrollWidth
					: scrollWidth;
			stickyContainer.current.style.height = `${stickyContainerHeight}px`;

			if (getContainerHeight) getContainerHeight(stickyContainerHeight);
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
		<div ref={stickyContainer}>
			<div className='overflow-x-hidden flex sticky top-0'>
				{children}
				{/* example
					<div className='min-w-[50vw] min-h-[100vh] flex justify-center items-center'>
						asdf
					</div>
				*/}
			</div>
		</div>
	);
};

export default ScrollHorContainer;
