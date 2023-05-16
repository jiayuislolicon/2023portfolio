import { useState, useEffect } from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import MainVisual from "./layouts/MainVisual";
import Works from "./layouts/Works";
import About from "./layouts/About";
import CardList from "./layouts/CardList";
import Contact from "./layouts/Contact";
import CollisionCats from "./components/CollisionCats";
import Header from "./components/Header";

function App() {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<ReactLenis root>
			<main>
				<Header onClick={(index: number) => console.log(index)} />
				<MainVisual width={screenWidth} />
				<Works width={screenWidth} />
				<About />
				<CollisionCats />
				<CardList width={screenWidth} />
				<Contact />
			</main>
		</ReactLenis>
	);
}

export default App;
