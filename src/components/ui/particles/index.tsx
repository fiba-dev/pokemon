import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./index.css";

export function Particulas(props) {
	const particlesInit = useCallback(async (engine: any) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container);
	}, []);
	if (props.play === true) {
		return (
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fullScreen: {
						zIndex: 1,
					},
					speed: { min: 20 },
					particles: {
						number: { value: 160, density: { enable: false } },

						shape: {
							type: ["image"],
							options: {
								image: [
									{
										src: "https://res.cloudinary.com/fiba06-dev/image/upload/v1662931335/pokecards/Master_Ball_3Fn_29_lqsvqe.webp",
										width: 16,
										height: 16,
										particles: {
											size: {
												value: 10,
											},
										},
									},
									{
										src: "https://res.cloudinary.com/fiba06-dev/image/upload/v1662931321/pokecards/Pok28Ilustraci29_vlvty7.webp",
										width: 16,
										height: 16,
										particles: {
											size: {
												value: 10,
											},
										},
									},
									{
										src: "https://res.cloudinary.com/fiba06-dev/image/upload/v1662931332/pokecards/Super_Ball__Ilustraci%C3%B3n_tnkslp.png",
										width: 16,
										height: 16,
										particles: {
											size: {
												value: 10,
											},
										},
									},
									{
										src: "https://res.cloudinary.com/fiba06-dev/image/upload/v1662931334/pokecards/Ultra_Ball_3Fn_29_l10hco.webp",
										width: 16,
										height: 16,
										particles: {
											size: {
												value: 10,
											},
										},
									},
								],
							},
						},
						size: { value: 10, random: true },
						move: {
							angle: {
								offset: 0,
								value: 90,
							},
							attract: {
								distance: 200,
								enable: false,
								rotate: {
									x: 600,
									y: 1200,
								},
							},
							center: {
								x: 50,
								y: 50,
								radius: 0,
							},
							decay: 0,
							distance: {},
							direction: "top",

							drift: 0,
							enable: true,
							gravity: {
								acceleration: 9.81,
								enable: false,
								inverse: false,
								maxSpeed: 100,
							},
							path: {
								clamp: true,
								delay: {
									random: {
										enable: false,
										minimumValue: 0,
									},
									value: 0,
								},
								enable: false,
								options: {},
							},
							outModes: {
								default: "out",
								bottom: "out",
								left: "out",
								right: "out",
								top: "out",
							},
							random: false,
							size: false,
							speed: 10,
							spin: {
								acceleration: 0,
								enable: false,
							},
							straight: false,
							trail: {
								enable: false,
								length: 10,
								fillColor: {
									value: "#000000",
								},
							},
							vibrate: false,
							warp: true,
						},
					},
				}}
			/>
		);
	} else return <div></div>;
}
