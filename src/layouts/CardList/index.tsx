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
			className='grid-layout lg:gap-y-[60px] relative py-[90px] lg:pt-[160px] lg:pb-[30px]'
			ref={container}
		>
			<h2 className='sticky top-1/2 -translate-y-1/2 leading-none text-green-blue text-center col-start-1 col-end-7 lg:col-end-13'>
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
					className={`relative z-[1] scroll-setting animate-move-2xl delay-2xl ${info.className}`}
					key={`persona-${info.title}`}
				/>
			))}

			{catInfos.map((info, index) => (
				<img
					src={`${info.type}-long.svg`}
					className={`w-[28vw] lg:w-[12.5vw] absolute z-[0] scroll-setting ${
						info.className
					} ${index / 2 === 0 ? "animate-move delay" : "animate-move-xl delay-xl"}`}
					key={`${info.type}-${info.id}`}
				/>
			))}
		</section>
	);
};

export default CardList;
