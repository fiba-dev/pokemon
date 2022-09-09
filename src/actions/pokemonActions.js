import { addPokemons, showCards, compareCards, winner } from "../types";

export const showCard = (pokemon) => ({
	type: showCards,
	id: pokemon,
});
export const addPokemonToList = (e) => ({ type: addPokemons, payload: e });

//compare cards
export const compare = (e) => ({
	type: compareCards,
});

export const win = () => ({
	type: winner,
});
