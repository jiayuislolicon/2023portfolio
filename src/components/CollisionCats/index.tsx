import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import CollisionSection from "../../features/CollisionSection";
import clsx from "clsx";

type Props = {};

const CollisionCats = ({}: Props) => {
	const section = useRef<HTMLDivElement>(null);
	const collisionSection = useRef<CollisionSection | null>(null);
	const [inRange, setInRange] = useState<boolean>(false);

	useEffect(() => {
		if (section.current) {
			collisionSection.current = new CollisionSection(section.current);
		}
	}, []);

	useEffect(() => {
		const options = {
			threshold: 0,
		};

		const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setInRange(true);
					if (collisionSection.current) collisionSection.current.applyItem();
				} else {
					setInRange(false);
				}
			});
		};

		let observer = new IntersectionObserver(callback, options);
		if (section.current) observer.observe(section.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			className='w-full h-screen bg-light-green relative collision-cats overflow-hidden pointer-events-none lg:pointer-events-auto is-green'
			ref={section}
		>
			<div className='bg-brown w-full h-full absolute-center pointer-events-none z-[2] opacity-30' />
			<div className='hidden lg:block absolute-center z-[2] text-center lg:text-right text-white pointer-events-none'>
				<h3 className='leading-none whitespace-pre'>MORE COLLISION</h3>
				<span className='text-normal-2xl'>WITH DIFFERENT IDEA</span>
			</div>
			<div className='lg:hidden absolute-center z-[2] text-center text-white pointer-events-none'>
				<h3 className='leading-none'>
					MORE
					<br />
					COLLISION
				</h3>
				<span className='text-normal-2xl'>WITH DIFFERENT IDEA</span>
			</div>
			<div
				className={clsx(
					"rounded-[50%] w-[calc(100vh_-_50px)] h-[calc(100vh_-_50px)] lg:w-[calc(100vw_-_90px)] lg:h-[calc(100vw_-_90px)] absolute-center bg-green-blue z-[0] transition-transform duration-700",
					inRange ? "scale-100" : "scale-0"
				)}
			/>
		</div>
	);
};

export default CollisionCats;
