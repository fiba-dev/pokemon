import React from "react";
import { PokeCards } from "../ui/cards";
// import { obtenerLista } from "../../api";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
// import { addPokemonToList } from "../../actions/pokemonActions";
import { showCard, compare, win } from "../../actions/pokemonActions";
import { ButtonContinue } from "../ui/buttons";
import { compareCards } from "../../types";

let music = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3"
);
let winnerAudio = new Audio(
	"https://res.cloudinary.com/fiba06-dev/video/upload/v1662941259/pokecards/pokemon-caught-rse_meloboom_wzwr3y.mp3"
);
let pikaVolumen = 0.3;
let compareVolumen = 0.3;
let winnerAudioSetting = 0.3;
music.volume = 0.3;
function AllCards(props) {
	let { pokemons, game, resultsGame, winner, comparations } = useSelector(
		(state) => state.showCardsPokemons
	);

	let compareTrue = new Audio(
		"https://res.cloudinary.com/fiba06-dev/video/upload/v1663019304/pokecards/pokemon-level-up_meloboom_tayakx.mp3"
	);
	let pika = new Audio(
		"https://res.cloudinary.com/fiba06-dev/video/upload/v1662940910/pokecards/short-pika_meloboom_fiwfzq.mp3"
	);
	if (winner === true) {
		winnerAudio.volume = winnerAudioSetting;
		winnerAudio.play();
	}

	let dispatch = useDispatch();

	if (comparations === true && pokemons.length / 2 !== resultsGame.length) {
		compareTrue.volume = compareVolumen;
		compareTrue.play();
	}

	async function MostrarPokemones(i) {
		dispatch(showCard(i));
		await Comparar();
	}
	async function Comparar() {
		setTimeout(() => {
			dispatch(compare());
			dispatch(win());
			console.log("Soy comparations", comparations);
		}, 350);
	}
	function ControllerAudio(e) {
		e.preventDefault();

		music.volume = e.target.value / 100;
		pikaVolumen = e.target.value / 100;
		compareVolumen = e.target.value / 100;
		winnerAudioSetting = e.target.value / 100;
	}

	return (
		<div className="cards_container">
			<div className="reproductorMusica">
				<div>
					<button
						className="botonesMusica"
						onClick={() => {
							music.play();
						}}
					>
						&#x23F5;
					</button>
					<button
						className="botonesMusica"
						onClick={() => {
							music.pause();
						}}
					>
						&#x23F8;
					</button>
					<button
						className="botonesMusica"
						onClick={() => {
							music.pause();
							music.src =
								"https://res.cloudinary.com/fiba06-dev/video/upload/v1662939710/pokecards/Pok%C3%A9mon_-_Atr%C3%A1palos_Ya_Latino_Oscar_Roa_Full_192_kbps_piyze3.mp3";
						}}
					>
						&#x23f9;
					</button>
				</div>

				<input
					className="volume"
					type={"range"}
					defaultValue={30}
					onChange={ControllerAudio}
				></input>
			</div>
			{pokemons.map((i, index) => (
				<PokeCards
					onClick={() => {
						MostrarPokemones(index);
						pika.volume = pikaVolumen;
						pika.play();
					}}
					mostrar={i.is_default}
					key={index}
					id={i.id}
					front={i.sprites.front_default}
					tipo={i.types[0].type.name}
				></PokeCards>
			))}
		</div>
	);
}
export { AllCards };
