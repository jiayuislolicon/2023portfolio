import { useState, useEffect, lazy } from "react";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header";
import Loading from "./components/Loading";

import MainVisual from "./layouts/MainVisual";
import Works from "./layouts/Works";

const About = lazy(() => import("./layouts/About"));
const CollisionCats = lazy(() => import("./components/CollisionCats"));
const CardList = lazy(() => import("./layouts/CardList"));
const Contact = lazy(() => import("./layouts/Contact"));

import isTouchDevice from "./utils/isTouchDevice";

function App() {
	const [screenWidth, setScreenWidth] = useState(0);
	const [screenHeight, setScreenHeight] = useState(0);
	const [loadingAssets, setLoadingAssets] = useState<string[]>([]);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		};
		handleResize();

		const isTouchDev = isTouchDevice();
		const assets = Array.from({ length: 5 }).map(
			(_, index) => `/work-${index + 1}${isTouchDev ? "-m" : ""}.jpg`
		);

		setLoadingAssets(assets);

		if (!isTouchDev) {
			window.addEventListener("resize", handleResize);
		}

		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			if (!isTouchDev) window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<main>
				<Loading assets={loadingAssets} />
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
