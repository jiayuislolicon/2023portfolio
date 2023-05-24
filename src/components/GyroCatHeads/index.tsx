import { useEffect, useState } from "react";
import CatHead from "../../components/CatHead";
import catInfos from "./catInfos";

type Props = {
	changeSceneStatus: Function;
};

const sceneTag = {
	khaki: "rainbow",
	black: "fish",
	white: "yarn",
};

const GyroCatHeads = ({ changeSceneStatus }: Props) => {
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
					className={`absolute ${info.position} grid w-full place-items-center cursor-pointer`}
					key={`gyro-cat-heads-${info.type}`}
					onClick={() => changeSceneStatus(sceneTag[info.type])}
				>
					<CatHead
						isMobile
						mouseX={mousePosX / (index + 2)}
						mouseY={0}
						type={info.type}
						className={info.sizeClass}
					/>
				</div>
			))}
		</div>
	);
};

export default GyroCatHeads;
