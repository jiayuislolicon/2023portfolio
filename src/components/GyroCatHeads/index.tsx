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
	return (
		<div className='absolute top-0 left-0 w-full h-[100lvh]'>
			{catInfos.map((info) => (
				<div
					className={`absolute ${info.position} grid w-full place-items-center cursor-pointer`}
					key={`gyro-cat-heads-${info.type}`}
					onClick={() => changeSceneStatus(sceneTag[info.type])}
				>
					<CatHead
						isMobile
						mouseX={0}
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
