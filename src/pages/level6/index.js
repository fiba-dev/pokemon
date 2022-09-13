import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl7 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Level6() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	let navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl7();

		dispatch(addPokemonToList(pokemones));
		navigate("/level7");
	}
	return (
		<div className="level6Container">
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste!"
					cant={30}
				>
					Mas Pokemones
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level6 };
