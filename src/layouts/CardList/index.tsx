import PersonaCard from "../../components/PersonaCard";
import catInfos from "./catInfos";
import personaInfos from "./personaInfos";
import { useRef } from "react";
import { useLenis, Lenis as ReactLenis } from "@studio-freight/react-lenis";

type Props = {
	width: number;
};

const CardList = ({ width }: Props) => {
	const container = useRef<HTMLElement | null>(null);
	const lenis = useLenis(() => {
		container.current &&
			container.current.style.setProperty(
				"--scroll",
				String(
					-container.current?.getBoundingClientRect().top /
						container.current?.offsetHeight
				)
			);
	});
	return (
		<section
			className='grid-layout lg:gap-y-40 relative py-[90px] lg:pt-[160px] lg:pb-[30px]'
			ref={container}
		>
			<h2 className='sticky top-[calc(50%_-_30vw)] lg:top-[calc(50%_-_7vw)] leading-none text-green-blue text-center col-start-1 col-end-7 lg:col-end-13'>
				THINK MYSELF
			</h2>

			{personaInfos.map((info, index) => (
				<PersonaCard
					title={info.title}
					content={info.content}
					imgUrl={info.imgUrl}
					color={info.color}
					className={`relative z-[1] scroll-setting ${info.className}`}
					key={`persona-${info.title}`}
				/>
			))}

			{catInfos.map((info, index) => (
				<img
					src={`${info.type}-long.svg`}
					className={`w-[28vw] lg:w-[12.5vw] absolute z-[0] scroll-setting ${
						info.className
					} ${
						index / 2 === 0 ? "animate-move-2xl delay-2xl" : "animate-move-xl delay-xl"
					}`}
					key={`${info.type}-${info.id}`}
				/>
			))}
		</section>
	);
};

export default CardList;
