import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl7 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";

function Level6() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();

	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl7();

		dispatch(addPokemonToList(pokemones));
	}
	return (
		<div className="level6Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					navigate={"/level7"}
				></ButtonContinue>
			</div>
		</div>
	);
}
export { Level6 };
