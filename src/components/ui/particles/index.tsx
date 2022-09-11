import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadConfettiShape } from "tsparticles-shape-confetti";

import "./index.css";

export function Particulas(props) {
	console.log("SOY PROPSPLAY", props.play);

	const particlesInit = useCallback(async (engine: any) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			id="tsparticles"
			init={props.play === true ? particlesInit : undefined}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					zIndex: 1,
				},
				speed: { min: 200 },
				particles: {
					number: {
						value: 0,
					},
					color: {
						value: ["#00FFFC", "#FC00FF", "#fffc00"],
					},
					shape: {
						type: ["circle", "square"],
						options: {},
					},
					opacity: {
						value: 1,
						animation: {
							enable: true,
							minimumValue: 0,
							speed: 2,
							startValue: "max",
							destroy: "min",
						},
					},
					size: {
						value: 3,
						random: {
							enable: true,
							minimumValue: 2,
						},
					},
					links: {
						enable: false,
					},
					life: {
						duration: {
							sync: true,
							value: 5,
						},
						count: 1,
					},
					move: {
						enable: true,
						gravity: {
							enable: true,
							acceleration: 10,
						},
						speed: {
							min: 600,
							max: 750,
						},
						decay: 0.2,
						direction: "none",
						straight: false,
						outModes: {
							default: "destroy",
							top: "none",
						},
					},
					rotate: {
						value: {
							min: 0,
							max: 360,
						},
						direction: "random",

						animation: {
							enable: true,
							speed: 300,
						},
					},
					tilt: {
						direction: "random",
						enable: true,
						move: true,
						value: {
							min: 0,
							max: 360,
						},
						animation: {
							enable: true,
							speed: 60,
						},
					},
					roll: {
						darken: {
							enable: true,
							value: 25,
						},
						enable: true,
						speed: {
							min: 15,
							max: 25,
						},
					},
					wobble: {
						distance: 30,
						enable: true,
						move: true,
						speed: {
							min: -15,
							max: 15,
						},
					},
				},
				emitters: {
					life: {
						count: props.cant,
						duration: 0.3,
						delay: 0,
					},
					rate: {
						delay: 0.1,
						quantity: 150,
					},
					size: {
						width: 0,
						height: 0,
					},
				},
			}}
		/>
	);
}
