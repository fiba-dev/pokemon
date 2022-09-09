import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl4 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";

function Level3() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();

	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl4();

		dispatch(addPokemonToList(pokemones));
	}
	return (
		<div className="level3Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					navigate={"/level4"}
				></ButtonContinue>
			</div>
		</div>
	);
}
export { Level3 };
