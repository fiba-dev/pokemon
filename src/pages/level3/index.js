import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl4 } from "../../api";
import { addPokemonToList } from "../../actions/pokemonActions";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Level3() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	async function MostrarPokemones() {
		let pokemones = await obtenerListaLvl4();

		dispatch(addPokemonToList(pokemones));
		navigate("/level4");
	}
	return (
		<div className="level3Container">
			{" "}
			<div className="cardsContainer">
				<AllCards></AllCards>{" "}
				<ButtonContinue
					mostrar={winner}
					onClick={MostrarPokemones}
					message="Ganaste!"
					cant={15}
				>
					Mas Pokemones
				</ButtonContinue>
			</div>
		</div>
	);
}
export { Level3 };
