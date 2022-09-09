import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl6 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";

function Level5() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();

	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl6();

		dispatch(addPokemonToList(pokemones));
	}
	return (
		<div className="level5Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					navigate={"/level6"}
				></ButtonContinue>
			</div>
		</div>
	);
}
export { Level5 };
