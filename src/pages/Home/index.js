import "./index.css";
import intro from "../../components/sounds/intro.mp3";

import { useNavigate } from "react-router-dom";
import { obtenerLista } from "../../api";
import { useDispatch } from "react-redux";
import { addPokemonToList } from "../../actions/pokemonActions";

export function Home() {
	let music = new Audio(intro);
	// let { pokemons, game, resultsGame } = useSelector(
	// 	(state) => state.showCardsPokemons
	// );
	const navigate = useNavigate();
	let dispatch = useDispatch();
	async function MostrarPokemones() {
		let pokemones = await obtenerLista();

		dispatch(addPokemonToList(pokemones));
	}
	music.volume = 0.3;
	return (
		<div className="homeContainer">
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
					navigate("/level1");
					MostrarPokemones();
				}}
				className="buttonStart"
			>
				Comenzar
			</button>
		</div>
	);
}
