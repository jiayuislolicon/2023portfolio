import { useState, useEffect, useRef } from "react";

import MainVisual from "./layouts/MainVisual";
import Works from "./layouts/Works";
import About from "./layouts/About";
import CardList from "./layouts/CardList";
import Contact from "./layouts/Contact";
import CollisionCats from "./components/CollisionCats";
import Header from "./components/Header";
import Loading from "./components/Loading";
import isTouchDevice from "./utils/isTouchDevice";
import Lenis from "@studio-freight/lenis";

function App() {
	const [screenWidth, setScreenWidth] = useState(0);
	const [screenHeight, setScreenHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		};
		handleResize();

		if (!isTouchDevice()) {
			window.addEventListener("resize", handleResize);
		}

		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			if (!isTouchDevice()) window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<main>
				<Loading
					assets={Array.from({ length: 5 }).map((_, index) => `/work-${index + 1}.jpg`)}
				/>
				<Header />
				<MainVisual width={screenWidth} />
				<Works width={screenWidth} height={screenHeight} />
				<About />
				<CollisionCats />
				<CardList />
				<Contact />
			</main>
		</>
	);
}

export default App;
