import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl2 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";

import "./index.css";
import { useNavigate } from "react-router-dom";
function Level1() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl2();

		dispatch(addPokemonToList(pokemones));
		navigate("/level2");
	}
	return (
		<div className="level1Container">
			<div className="lvl1cardsContainer">
				<AllCards navigate={"/level2"}></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste!"
					cant={5}
				>
					Mas Pokemones
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level1 };
