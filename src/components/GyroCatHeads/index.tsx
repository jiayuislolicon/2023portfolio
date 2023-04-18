import { useEffect, useState } from "react";
import CatHead from "../../components/CatHead";
import catInfos from "./catInfos";

const GyroCatHeads = () => {
	const [mousePosX, setMousePosX] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			e.preventDefault();
			const posX = (e.clientX - window.innerWidth / 2) * 0.4;
			setMousePosX(posX);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='absolute top-0 left-0 w-full h-screen'>
			{catInfos.map((info, index) => (
				<div
					className={`absolute bottom-[${info.position}%] grid w-full place-items-center`}
					key={`cat-heads-${info.type}`}
				>
					<CatHead
						isMobile
						mouseX={mousePosX / (index + 2)}
						mouseY={0}
						type={info.type}
						className={`w-[${info.size}vw] h-auto md:w-[${info.padSize}vw]`}
					/>
				</div>
			))}
		</div>
	);
};

export default GyroCatHeads;
