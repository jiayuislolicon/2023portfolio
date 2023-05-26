export default function throttle(fn: Function, delay: number) {
	let previousTime = 0;

	return function (...args: any[]) {
		const nowTime = new Date().getTime();

		if (nowTime - previousTime > delay) {
			// @ts-ignore
			fn.apply(this, args);
			previousTime = nowTime;
		}
	};
}
