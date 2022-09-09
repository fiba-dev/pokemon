import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl3 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";

function Level2() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();

	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl3();

		dispatch(addPokemonToList(pokemones));
	}
	return (
		<div className="level2Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					navigate={"/level3"}
				></ButtonContinue>
			</div>
		</div>
	);
}
export { Level2 };
