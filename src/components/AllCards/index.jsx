import React from "react";
import { PokeCards } from "../ui/cards";
// import { obtenerLista } from "../../api";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
// import { addPokemonToList } from "../../actions/pokemonActions";
import { showCard, compare, win } from "../../actions/pokemonActions";
import { ButtonContinue } from "../ui/buttons";
import { compareCards } from "../../types";

function AllCards(props) {
	let { pokemons, game, resultsGame, winner } = useSelector(
		(state) => state.showCardsPokemons
	);
	let pika = new Audio(
		"https://res.cloudinary.com/fiba06-dev/video/upload/v1662940910/pokecards/short-pika_meloboom_fiwfzq.mp3"
	);
	pika.volume = 0.01;
	let dispatch = useDispatch();

	// async function MostrarPokemones() {
	// 	let pokemones = await obtenerLista();

	// 	dispatch(addPokemonToList(pokemones));
	// }
	let booleano = false;
	async function MostrarPokemones(i) {
		dispatch(showCard(i));
		await Comparar();
	}
	async function Comparar() {
		setTimeout(() => {
			dispatch(compare());
			dispatch(win());
		}, 330);
	}

	return (
		<div className="cards_container">
			{pokemons.map((i, index) => (
				<PokeCards
					onClick={() => {
						MostrarPokemones(index);
						pika.play();
					}}
					segundoClick={() => {}}
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
