import { AllCards } from "../../components/AllCards";
import { ButtonContinue } from "../../components/ui/buttons";
import { useSelector, useDispatch } from "react-redux";
import { obtenerListaLvl2 } from "../../api";
import React, { useState } from "react";
import { addPokemonToList } from "../../actions/pokemonActions";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/ui/loading";
function Level1() {
	let { winner } = useSelector((state) => state.showCardsPokemons);
	let dispatch = useDispatch();
	const navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	async function MostrarPokemones() {
		setLoader(true);
		try {
			let pokemones = await obtenerListaLvl2();
			dispatch(addPokemonToList(pokemones));
			navigate("/level2");
		} catch (error) {
			// Manejar el error si la llamada falla
		} finally {
			setLoader(false);
		}
	}
	return (
		<div className="level1Container">
			{loader ? (
				<Loading></Loading>
			) : (
				<div className="lvl1cardsContainer">
					<AllCards navigate={"/level2"}></AllCards>
					<ButtonContinue
						mostrar={winner}
						onClick={MostrarPokemones}
						message="Ganaste!"
						cant={5}
					>
						Mas Pokemones
					</ButtonContinue>
				</div>
			)}
		</div>
	);
}
export { Level1 };
