import { useState, useEffect } from "react";
import MainVisual from "./layouts/MainVisual";
import Works from "./layouts/Works";
import About from "./layouts/About";
import CardList from "./layouts/CardList";
import Contact from "./layouts/Contact";
import CollisionCats from "./components/CollisionCats";

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
		<main>
			<MainVisual width={screenWidth} />
			<Works />
			<About />
			<CollisionCats />
			<CardList width={screenWidth} />
			<Contact />
		</main>
	);
}

export default App;
