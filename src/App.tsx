import { useState, useEffect } from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import MainVisual from "./layouts/MainVisual";
import Works from "./layouts/Works";
import About from "./layouts/About";
import CardList from "./layouts/CardList";
import Contact from "./layouts/Contact";
import CollisionCats from "./components/CollisionCats";
import Header from "./components/Header";
import Loading from "./components/Loading";
import isTouchDevice from "./utils/isTouchDevice";

function App() {
	const [screenWidth, setScreenWidth] = useState(0);
	const [isWheelDevice, setIsWheelDevice] = useState(false);

	useEffect(() => {
		window.scroll(0, 0);

		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		handleResize();

		if (!isTouchDevice()) {
			window.addEventListener("resize", handleResize);
			setIsWheelDevice(true);
		}

		return () => {
			if (!isTouchDevice()) window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isWheelDevice && <ReactLenis root />}
			<main>
				<Loading
					assets={Array.from({ length: 5 }).map((_, index) => `/work-${index + 1}.png`)}
				/>
				<Header />
				<MainVisual width={screenWidth} />
				<Works width={screenWidth} />
				<About />
				<CollisionCats />
				<CardList />
				<Contact />
			</main>
		</>
	);
}

export default App;
