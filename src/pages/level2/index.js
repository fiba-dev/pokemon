import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl3 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Level2() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl3();

		dispatch(addPokemonToList(pokemones));
		navigate("/level3");
	}
	return (
		<div className="level2Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste!"
					cant={10}
				>
					Mas Pokemones
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level2 };
