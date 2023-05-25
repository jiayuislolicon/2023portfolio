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
				<Loading
					assets={["https://picsum.photos/550/1200", "https://picsum.photos/550/1200"]}
				/>
				<Header />
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
