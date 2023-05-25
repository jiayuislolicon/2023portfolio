const preload = (src: string) =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;
		img.onload = resolve;
		img.onerror = reject;
	});

export const preloadByProcessing = (src: string, addProcessing?: Function) => {
	const img = new Image();
	img.src = src;
	img.onload = () => {
		console.log("onload");
		if (addProcessing) addProcessing();
	};
	img.onerror = (error) => console.error(error);
};

export const loadingAssets = (assetsLocation: string[]) => Promise.all(assetsLocation.map(preload));
