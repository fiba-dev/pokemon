import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl5 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Level4() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl5();

		dispatch(addPokemonToList(pokemones));
		navigate("/level5");
	}
	return (
		<div className="level4Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste!"
					cant={20}
				>
					Mas Pokemones
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level4 };
