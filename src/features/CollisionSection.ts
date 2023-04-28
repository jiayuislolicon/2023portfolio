import {
	Engine,
	Render,
	Runner,
	MouseConstraint,
	Mouse,
	Composite,
	Bodies,
	World,
} from "matter-js";

import type { Body } from "matter-js";

export default class CollisionSection {
	engine: Engine;
	world: World;
	render: Render;
	runner: Runner;
	container: HTMLElement;
	width: number;
	height: number;
	bodies: (Composite | Body)[];

	constructor(container: HTMLElement) {
		this.container = container;
		this.width = container.clientWidth;
		this.height = container.clientHeight;
		this.bodies = [];

		this.engine = Engine.create();
		this.world = this.engine.world;

		this.render = Render.create({
			element: container,
			engine: this.engine,
			options: {
				width: this.width,
				height: this.height,
				showAngleIndicator: false,
				wireframes: false,
				background: "transparent",
				wireframeBackground: "transparent",
			},
		});
		Render.run(this.render);

		this.runner = Runner.create();
		Runner.run(this.runner, this.engine);

		Render.lookAt(this.render, {
			min: { x: 0, y: 0 },
			max: { x: this.width, y: this.height },
		});

		this.init();
	}

	init() {
		this.createBodies();
		this.addMouseEvent();
		window.addEventListener("resize", this.addResize.bind(this));
	}

	createBodies() {
		const rectHeight = 10,
			options = {
				isStatic: true,
				render: {
					fillStyle: "transparent",
				},
			};
		// wordingSize =
		// 	this.width < 1024
		// 		? {
		// 				imgSrc: "/collision-word.svg",
		// 				width: this.width * 0.66,
		// 				height: this.width * 0.46,
		// 				originWidth: 249,
		// 				originHeight: 174,
		// 		  }
		// 		: {
		// 				imgSrc: "/collision-word-desktop.svg",
		// 				width: this.width * 0.6,
		// 				height: this.width * 0.13,
		// 				originWidth: 860,
		// 				originHeight: 197,
		// 		  };

		this.world.bodies = [];

		const staticElements = [
			Bodies.rectangle(-this.width * 0.05, this.height / 2, rectHeight, this.height, options),
			Bodies.rectangle(this.width * 1.05, this.height / 2, rectHeight, this.height, options),
			Bodies.rectangle(
				this.width / 2,
				this.height - rectHeight / 2,
				this.width,
				rectHeight,
				options
			),
			// Bodies.rectangle(
			// 	this.width / 2,
			// 	this.height / 2,
			// 	wordingSize.width * 0.9,
			// 	wordingSize.height * 0.9,
			// 	{
			// 		isStatic: true,
			// 		render: {
			// 			sprite: {
			// 				texture: wordingSize.imgSrc,
			// 				xScale: wordingSize.width / wordingSize.originWidth,
			// 				yScale: wordingSize.height / wordingSize.originHeight,
			// 			},
			// 		},
			// 	}
			// ),
		];

		Composite.add(this.world, staticElements);

		this.bodies = staticElements;

		this.createCatInfos().forEach(({ x, y, type, width, height }) => {
			const body = Bodies.rectangle(x, y, width, height, {
				density: 0.0005,
				frictionAir: 0.06,
				restitution: 0.3,
				friction: 0.01,
				render: {
					sprite: {
						texture: `/${type}.svg`,
						xScale: width / 437,
						yScale: height / 383,
					},
				},
			});

			Composite.add(this.world, body);
			this.bodies.push(body);
		});
	}

	addMouseEvent() {
		const mouse = Mouse.create(this.render.canvas),
			mouseConstraint = MouseConstraint.create(this.engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false,
					},
				},
			});

		Composite.add(this.world, mouseConstraint);
		this.render.mouse = mouse;
	}

	addResize() {
		this.width = this.container.clientWidth;
		this.height = this.container.clientHeight;

		this.render.bounds.max.x = this.width;
		this.render.bounds.max.y = this.height;
		this.render.options.width = this.width;
		this.render.options.height = this.height;
		this.render.canvas.width = this.width;
		this.render.canvas.height = this.height;

		Render.setPixelRatio(this.render, window.devicePixelRatio);

		this.bodies.forEach((body) => Composite.remove(this.world, body));
		this.createBodies();
	}

	createCatInfos() {
		let catInfos =
			this.width < 1024
				? [
						{
							x: this.width * 0.11,
							y: this.height * 0.2,
							type: "gray",
							width: this.width * 0.44,
							height: ((this.width * 0.44) / 437) * 383,
						},
						{
							x: this.width * 0.5,
							y: this.height * 0.2,
							type: "black",
							width: this.width * 0.44,
							height: ((this.width * 0.44) / 437) * 383,
						},
						{
							x: this.width * 0.89,
							y: this.height * 0.2,
							type: "khaki",
							width: this.width * 0.44,
							height: ((this.width * 0.44) / 437) * 383,
						},
						{
							x: this.width * 0.3,
							y: this.height * 0.1,
							type: "khaki",
							width: this.width * 0.34,
							height: ((this.width * 0.34) / 437) * 383,
						},
						{
							x: this.width * 0.6,
							y: this.height * 0.1,
							type: "gray",
							width: this.width * 0.34,
							height: ((this.width * 0.34) / 437) * 383,
						},
						{
							x: this.width * 0.4,
							y: 0,
							type: "black",
							width: this.width * 0.22,
							height: ((this.width * 0.22) / 437) * 383,
						},
						{
							x: this.width * 0.6,
							y: 0,
							type: "khaki",
							width: this.width * 0.22,
							height: ((this.width * 0.22) / 437) * 383,
						},
				  ]
				: [
						{
							x: 0,
							y: this.height * 0.2,
							type: "khaki",
							width: this.width * 0.33,
							height: ((this.width * 0.33) / 437) * 383,
						},
						{
							x: this.width * 0.05,
							y: this.height * 0.2,
							type: "black",
							width: this.width * 0.33,
							height: ((this.width * 0.33) / 437) * 383,
						},
						{
							x: this.width * 0.32,
							y: this.height * 0.3,
							type: "gray",
							width: this.width * 0.25,
							height: ((this.width * 0.25) / 437) * 383,
						},
						{
							x: this.width * 0.5,
							y: this.height * 0.3,
							type: "khaki",
							width: this.width * 0.2,
							height: ((this.width * 0.2) / 437) * 383,
						},
						{
							x: this.width * 0.71,
							y: this.height * 0.3,
							type: "gray",
							width: this.width * 0.25,
							height: ((this.width * 0.25) / 437) * 383,
						},
						{
							x: this.width * 0.88,
							y: 0,
							type: "black",
							width: this.width * 0.44,
							height: ((this.width * 0.44) / 437) * 383,
						},
						{
							x: this.width * 0.2,
							y: 0,
							type: "khaki",
							width: this.width * 0.24,
							height: ((this.width * 0.24) / 437) * 383,
						},
						{
							x: this.width * 0.7,
							y: 0,
							type: "black",
							width: this.width * 0.24,
							height: ((this.width * 0.24) / 437) * 383,
						},
				  ];

		return catInfos;
	}

	applyItem() {
		console.log("apply");
		const [bodyWidth, bodyHeight] =
			this.width < 1024
				? [this.width * 0.22, ((this.width * 0.22) / 437) * 383]
				: [this.width * 0.17, ((this.width * 0.17) / 437) * 383];

		const item = Bodies.rectangle(this.width / 2, 0, bodyWidth, bodyHeight, {
			render: {
				sprite: {
					texture: "/gray.svg",
					xScale: bodyWidth / 437,
					yScale: bodyHeight / 383,
				},
			},
		});

		Composite.add(this.world, item);
	}

	destroy() {
		Render.stop(this.render!);
		World.clear(this.engine.world, true);
		Engine.clear(this.engine);
		this.render!.canvas.remove();
		this.render!.textures = {};

		window.removeEventListener("resize", this.addResize.bind(this));
	}
}
