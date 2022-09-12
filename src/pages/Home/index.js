import "./index.css";
import intro from "../../components/sounds/intro.mp3";
import ReactAudioPlayer from "react-audio-player";
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
		console.log("SOY CONTROLLER AUDIO", e);
	}
	return (
		<div className="homeContainer">
			<div className="reproductorMusica">
				<button
					className="botonesMusica"
					onClick={() => {
						music.play();
					}}
				>
					{">"}
				</button>
				<button
					className="botonesMusica"
					onClick={() => {
						music.pause();
					}}
				>
					||
				</button>
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
