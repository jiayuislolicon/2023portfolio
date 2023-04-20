import { useEffect, useState } from "react";
import CatHead from "../CatHead";

type catType = "khaki" | "black" | "white";
const catTypes: catType[] = ["black", "khaki", "white"];

type Props = {
	className?: string;
};

const HorCatHeads = ({ className }: Props) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			e.preventDefault();
			const posX = (e.clientX - window.innerWidth / 2) * 0.015;
			const posY = (e.clientY - window.innerHeight / 2) * 0.015;
			setMousePos({ x: posX, y: posY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={`grid grid-cols-12 gap-5 ${className}`}>
			{catTypes.map((type) => (
				<div
					className={`grid w-full place-items-center col-span-4`}
					key={`hori-cat-heads-${type}`}
				>
					<CatHead
						isMobile={false}
						mouseX={mousePos.x}
						mouseY={mousePos.y}
						type={type}
						className='w-full h-auto'
					/>
				</div>
			))}
		</div>
	);
};

export default HorCatHeads;
