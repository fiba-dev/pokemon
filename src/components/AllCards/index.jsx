import React from "react";
import { PokeCards } from "../ui/cards";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { showCard, compare, win } from "../../actions/pokemonActions";

function AllCards(props) {
	let pika = new Audio(
		"https://res.cloudinary.com/fiba06-dev/video/upload/v1662940910/pokecards/short-pika_meloboom_fiwfzq.mp3"
	);
	let { pokemons } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	let { volumen } = useSelector((state) => state.showVolumen);
	async function MostrarPokemones(i) {
		dispatch(showCard(i));
		await Comparar();
	}
	async function Comparar() {
		setTimeout(() => {
			dispatch(compare());
			dispatch(win());
		}, 350);
	}

	return (
		<div className="cards_container">
			{pokemons.map((i, index) => (
				<PokeCards
					onClick={() => {
						MostrarPokemones(index);
						pika.volume = volumen;
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
