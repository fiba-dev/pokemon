import "./index.css";

import { useNavigate } from "react-router-dom";
import { obtenerLista } from "../../api";
import { useDispatch } from "react-redux";
import { addPokemonToList } from "../../actions/pokemonActions";

export function Home() {
	let music = new Audio(
		"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3"
	);
	music.volume = 0.3;
	// let { pokemons, game, resultsGame } = useSelector(
	// 	(state) => state.showCardsPokemons
	// );
	const navigate = useNavigate();
	let dispatch = useDispatch();
	async function MostrarPokemones() {
		let pokemones = await obtenerLista();

		dispatch(addPokemonToList(pokemones));
		navigate("/level1");
	}
	function ControllerAudio(e) {
		e.preventDefault();

		console.log("SOY CONTROLLER AUDIO", e.target.value);
		music.volume = e.target.value / 100;
	}
	return (
		<div className="homeContainer">
			<div className="reproductorMusica">
				<div>
					<button
						className="botonesMusica"
						onClick={() => {
							music.play();
						}}
					>
						<img
							className="iconos"
							src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069458/pokecards/jugar_ztlz9i.png"
							alt="señal de play"
						/>
					</button>
					<button
						className="botonesMusica"
						onClick={() => {
							music.pause();
						}}
					>
						<img
							className="iconos"
							src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069491/pokecards/pausa_1_famy9m.png"
							alt="señal de pausa"
						/>
					</button>
					<button
						className="botonesMusica"
						onClick={() => {
							music.pause();
							music.src =
								"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3";
						}}
					>
						<img
							className="iconos"
							src="https://res.cloudinary.com/fiba06-dev/image/upload/v1663069386/pokecards/parada_unj9fj.png"
							alt="señal de stop iconos"
						/>
					</button>
				</div>
				<input
					className="volume"
					type={"range"}
					defaultValue={20}
					onClick={ControllerAudio}
				></input>
			</div>

			<img
				src={
					"https://res.cloudinary.com/fiba06-dev/image/upload/v1662638520/pokecards/pokelogo_wbl31g.png"
				}
				className="pokelogo"
				alt="logo"
			></img>
			{/* <audio autoPlay={true} volume={0.3} controls>
				<source src={music.src} type="video/mp4" />
			</audio> */}
			<button
				onClick={() => {
					music.pause();

					MostrarPokemones();
				}}
				className="buttonStart"
			>
				Comenzar
			</button>
		</div>
	);
}
