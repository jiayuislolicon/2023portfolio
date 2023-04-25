import PersonaCard from "../../components/PersonaCard";
import catInfos from "./catInfos";
import personaInfos from "./personaInfos";

type Props = {
	width: number;
};

const CardList = ({ width }: Props) => {
	return (
		<section className='grid-layout lg:gap-y-[60px] relative py-[90px] lg:pt-[160px] lg:pb-[30px]'>
			<h2 className='leading-none text-green-blue text-center col-start-1 col-end-7 lg:col-end-13 mb-[75px] lg:mb-[360px]'>
				{width < 1024 ? (
					<>
						THINK
						<br />
						ABOUT
						<br />
						MYSELF
					</>
				) : (
					<>
						THINK ABOUT
						<br />
						MYSELF
					</>
				)}
			</h2>

			{personaInfos.map((info) => (
				<PersonaCard
					title={info.title}
					content={info.content}
					imgUrl={info.imgUrl}
					color={info.color}
					className={`relative z-[1] ${info.className}`}
					key={`persona-${info.title}`}
				/>
			))}

			{catInfos.map((info) => (
				<img
					src={`${info.type}-long.svg`}
					className={`w-[28vw] lg:w-[12.5vw] absolute z-[0] ${info.className}`}
					key={`${info.type}-${info.id}`}
				/>
			))}
		</section>
	);
};

export default CardList;
