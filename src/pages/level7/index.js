import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerLista } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";

function Level7() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();

	async function MostrarPokemones() {
		let pokemones = await obtenerLista();

		dispatch(addPokemonToList(pokemones));
	}
	return (
		<div className="level7Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					navigate={"/level1"}
					message="Ganaste el Juego!"
					cant={150}
				>
					Volver Al inicio
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level7 };
