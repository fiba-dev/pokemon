import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl8 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Level7() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	let navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl8();

		dispatch(addPokemonToList(pokemones));
		navigate("/level8");
	}
	return (
		<div className="level7Container">
			{" "}
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
export { Level7 };
