import { cva } from "class-variance-authority";
import { useEffect, useRef, ReactNode } from "react";
import Button from "../Button";
import isTouchDevice from "../../utils/isTouchDevice";

type Props = {
	children: ReactNode;
	onScroll?: Function;
	onResize?: Function;
};

// 注意不要在父層級(像是body, html)加入其他position屬性與overflow-hidden
// stikcy 會無效

const ScrollHorContainer = ({ children, onScroll, onResize }: Props) => {
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

			const isBelowBottom =
				stickyContainer.current.offsetTop + stickyContainer.current.offsetHeight >
				document.documentElement.scrollTop;

			if (!isBelowBottom)
				stickyContainer.current.children[0].scrollLeft =
					stickyContainer.current.offsetTop + stickyContainer.current.offsetHeight;
		}
	};

	const isElementInViewport = (element: HTMLElement) => {
		const { top, bottom } = element.getBoundingClientRect();
		return {
			isInViewport: top <= 0 && bottom > document.documentElement.clientHeight,
			isTop: top > 0,
		};
	};

	const handleonScroll = () => {
		onScroll && onScroll();

		if (stickyContainer.current) {
			const { isInViewport, isTop } = isElementInViewport(stickyContainer.current);

			if (!isInViewport) {
				prevScrollTop.current = Math.floor(window.scrollY);
				if (isTop) stickyContainer.current.children[0].scrollLeft = 0;
				return;
			}

			const delta = window.scrollY - prevScrollTop.current;
			prevScrollTop.current = Math.floor(window.scrollY);
			stickyContainer.current.children[0].scrollLeft += delta;
		}
	};

	useEffect(() => {
		setStickyContainerSize();

		const handleResize = () => {
			setStickyContainerSize();
			onResize && onResize();
		};

		window.addEventListener("scroll", handleonScroll);
		if (!isTouchDevice()) window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleonScroll);
			if (!isTouchDevice()) window.removeEventListener("resize", handleResize);
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
